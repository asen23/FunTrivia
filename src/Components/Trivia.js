import React, { useState, useEffect, useCallback } from "react"
import Button from "./Button"

function Trivia(props) {
    const [isLoading, setIsLoading] = useState(true)
    const [trivia, setTrivia] = useState({})
    const [answers, setAnswers] = useState([])
    const [isCorrect, setIsCorrect] = useState(undefined)
    const [retry, setRetry] = useState(0)
    const [isError, setIsError] = useState(false)
    const getTrivia = useCallback(() => {
        setIsLoading(true)
        fetch(props.url, {
            mode: "cors",
        })
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                setRetry(0)
                setTrivia(response.results[0])
                let allAnswer = response.results[0].incorrect_answers
                allAnswer.push(response.results[0].correct_answer)
                allAnswer.sort(() => 0.5 - Math.random())
                setAnswers(allAnswer)
                setIsLoading(false)
            })
            .catch((error) => {
                if (retry < 3) {
                    setRetry(retry + 1)
                } else {
                    setIsError(true)
                }
            })
    }, [retry, props.url])
    useEffect(() => {
        getTrivia()
    }, [getTrivia])
    const checkAnswer = (answer) => {
        setIsCorrect(answer === trivia.correct_answer)
        if (answer === trivia.correct_answer) {
            props.onAnswer(100)
        } else {
            props.onAnswer(-25)
        }
    }
    const ButtonList = () => {
        return (
            <>
                <Button
                    name="Play Again"
                    onClick={() => {
                        setIsCorrect(undefined)
                        getTrivia()
                    }}
                />
                <Button
                    name="Exit"
                    onClick={() => {
                        props.exit()
                    }}
                />
            </>
        )
    }
    if (isLoading) {
        return (
            <img
                src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
                alt="loading"
            />
        )
    } else if (isError) {
        return (
            <div className="w-75">
                <h1>An error has occurred</h1>
                <ButtonList />
            </div>
        )
    } else {
        return (
            <div className="w-75">
                <p className="ma1 f4">Category: {trivia.category}</p>
                <p className="ma1 f4">Difficulty: {trivia.difficulty}</p>
                <p
                    className="ma1 f2"
                    dangerouslySetInnerHTML={{ __html: trivia.question }}
                ></p>
                {isCorrect === undefined ? (
                    <div className="flex flex-wrap">
                        {answers.map((answer) => (
                            <button
                                className="w-50 pa3 f3"
                                onClick={() => checkAnswer(answer)}
                                key={answer}
                                dangerouslySetInnerHTML={{
                                    __html: answer,
                                }}
                            ></button>
                        ))}
                    </div>
                ) : isCorrect === true ? (
                    <div>
                        <h1 className="green">Correct</h1>
                        <ButtonList />
                    </div>
                ) : (
                    <div>
                        <h1 className="red">Wrong</h1>
                        <h2
                            dangerouslySetInnerHTML={{
                                __html:
                                    "The correct answer is " +
                                    trivia.correct_answer,
                            }}
                        ></h2>
                        <ButtonList />
                    </div>
                )}
            </div>
        )
    }
}

export default Trivia
