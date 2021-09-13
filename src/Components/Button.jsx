import React from "react"

function Button(props) {
    return (
        <button
            className="bg-blue b--light-blue br3 f2 pa2 ma2 grow"
            onClick={props.onClick}
        >
            {props.name}
        </button>
    )
}

export default Button
