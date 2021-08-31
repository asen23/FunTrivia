import React from "react"
import Button from "./Components/Button"

function App() {
    return (
        <div className="flex flex-column items-center justify-center vh-100 bg-lightest-blue">
            <h1 className="f1">Fun Trivia</h1>
            <Button name="Play" />
            <Button name="Score" />
        </div>
    )
}

export default App
