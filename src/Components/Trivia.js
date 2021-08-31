import React, { useState, useEffect } from "react"
import Button from "./Button"

function Trivia(props) {
    const [isLoading, setIsLoading] = useState(true)
    const [trivia, setTrivia] = useState({})
    const [answers, setAnswers] = useState([])
    const [isCorrect, setIsCorrect] = useState(undefined)
    const getTrivia = () => {
        setIsLoading(true)
        fetch("https://opentdb.com/api.php?amount=1&type=multiple")
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                setTrivia(response.results[0])
                let allAnswer = response.results[0].incorrect_answers
                allAnswer.push(response.results[0].correct_answer)
                allAnswer.sort(() => 0.5 - Math.random())
                setAnswers(allAnswer)
                setIsLoading(false)
            })
    }
    useEffect(() => {
        getTrivia()
        // eslint-disable-next-line
    }, [])
    const checkAnswer = (answer) => {
        setIsCorrect(answer === trivia.correct_answer)
        if (answer === trivia.correct_answer) {
            props.onAnswer(100)
        } else {
            props.onAnswer(-25)
        }
    }
    if (isLoading) {
        return (
            <img
                src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
                alt="loading"
            />
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
                                dangerouslySetInnerHTML={{
                                    __html: answer,
                                }}
                            ></button>
                        ))}
                    </div>
                ) : isCorrect === true ? (
                    <div>
                        <h1 className="green">Correct</h1>
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
                    </div>
                )}
            </div>
        )
    }
}

export default Trivia
