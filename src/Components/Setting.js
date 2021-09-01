import React, { useState, useEffect } from "react"
import Button from "./Button"

const Setting = (props) => {
    const [categories, setCategories] = useState([])
    const [type, setType] = useState("any")
    const [difficulty, setDifficulty] = useState("any")
    const [category, setCategory] = useState("any")

    useEffect(() => {
        fetch("https://opentdb.com/api_category.php")
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                setCategories(response.trivia_categories)
            })
    }, [])
    useEffect(() => {
        setType(props.setting.type)
        setDifficulty(props.setting.difficulty)
        setCategory(props.setting.category)
    }, [props.setting.category, props.setting.difficulty, props.setting.type])

    return (
        <div className="flex flex-column w-40 f3">
            <label htmlFor="type">Type:</label>
            <select
                className="mv2"
                name="type"
                id="type"
                value={type}
                onChange={(event) => {
                    setType(event.target.value)
                }}
            >
                <option value="any">Any</option>
                <option value="multiple">Multiple</option>
                <option value="boolean">True/False</option>
            </select>
            <label htmlFor="difficulty">Difficulty:</label>
            <select
                className="mv2"
                name="difficulty"
                id="difficulty"
                value={difficulty}
                onChange={(event) => {
                    setDifficulty(event.target.value)
                }}
            >
                <option value="any">Any</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <label htmlFor="category">Category:</label>
            <select
                className="mv2"
                name="category"
                id="category"
                value={category}
                onChange={(event) => {
                    setCategory(event.target.value)
                }}
            >
                <option value="any">Any</option>
                {categories.map((category) => (
                    <option value={category.id} key={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
            <Button
                name="Back"
                onClick={() => {
                    props.onBack(type, difficulty, category)
                }}
            />
        </div>
    )
}

export default Setting
