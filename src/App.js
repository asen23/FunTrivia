import React, { useState, useEffect } from "react"
import Button from "./Components/Button"
import Trivia from "./Components/Trivia"

function App() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [highscore, setHighscore] = useState(0)
    const [score, setScore] = useState(0)
    const [hasOldScore, setHasOldScore] = useState(false)

    useEffect(() => {
        let lastHighscore = localStorage.getItem("highscore")
        if (lastHighscore != null) {
            setHighscore(parseInt(lastHighscore))
        }
        let lastScore = sessionStorage.getItem("lastscore")
        if (lastScore != null) {
            setHasOldScore(true)
        }
    }, [])

    const ButtonList = () => {
        let Continue = null

        if (hasOldScore) {
            Continue = (
                <Button
                    name="Continue"
                    onClick={() => {
                        setIsPlaying(true)
                        setScore(parseInt(sessionStorage.getItem("lastscore")))
                    }}
                />
            )
        }

        return (
            <div className="flex flex-column">
                <Button
                    name="Play"
                    onClick={() => {
                        setIsPlaying(true)
                    }}
                />
                {Continue}
                <Button name="Setting" onClick={() => {}} />
            </div>
        )
    }

    return (
        <div className="flex flex-column items-center justify-center vh-100 bg-lightest-blue relative">
            <div className="absolute top-0 right-0 ph4">
                <h2>Highscore: {highscore}</h2>
                <h2>Score: {score}</h2>
            </div>
            <h1 className="f1">Fun Trivia</h1>
            {isPlaying ? (
                <Trivia
                    exit={() => {
                        setIsPlaying(false)
                    }}
                    onAnswer={(point) => {
                        if (score + point > highscore) {
                            setHighscore(score + point)
                            localStorage.setItem(
                                "highscore",
                                (score + point).toString()
                            )
                        }
                        sessionStorage.setItem("lastscore", score + point)
                        setScore(score + point)
                    }}
                />
            ) : (
                <ButtonList />
            )}
        </div>
    )
}

export default App
