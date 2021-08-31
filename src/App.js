import React, { useState } from "react"
import Button from "./Components/Button"
import Trivia from "./Components/Trivia"

function App() {
    const [isPlaying, setIsPlaying] = useState(false)
    return (
        <div className="flex flex-column items-center justify-center vh-100 bg-lightest-blue">
            <h1 className="f1">Fun Trivia</h1>
            {isPlaying ? (
                <Trivia
                    exit={() => {
                        setIsPlaying(false)
                    }}
                />
            ) : (
                <Button
                    name="Play"
                    onClick={() => {
                        setIsPlaying(true)
                    }}
                />
            )}
        </div>
    )
}

export default App
