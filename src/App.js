import React from "react"

function App() {
    return (
        <div className="flex flex-column items-center justify-center vh-100 bg-lightest-blue">
            <h1 className="f1">Fun Trivia</h1>
            <button className="bg-blue b--light-blue br3 f2 pa2 ma2 grow">
                Play
            </button>
            <button className="bg-blue b--light-blue br3 f2 pa2 ma2 grow">
                Score
            </button>
        </div>
    )
}

export default App
