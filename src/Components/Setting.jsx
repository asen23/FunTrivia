import { useState, useEffect } from "react"
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

    const SelectForm = (props) => {
        return (
            <>
                <label htmlFor={props.id}>{props.label}</label>
                <select
                    className="mv2"
                    name={props.id}
                    id={props.id}
                    value={props.value}
                    onChange={(event) => {
                        props.onChange(event.target.value)
                    }}
                >
                    {props.options.map(([value, name]) => (
                        <option value={value} key={value}>
                            {name}
                        </option>
                    ))}
                </select>
            </>
        )
    }

    return (
        <div className="flex flex-column w-40 f3">
            <SelectForm
                id="type"
                label="Type:"
                value={type}
                onChange={(value) => {
                    setType(value)
                }}
                options={[
                    ["any", "Any"],
                    ["multiple", "Multiple"],
                    ["boolean", "True/False"],
                ]}
            />
            <SelectForm
                id="difficulty"
                label="Difficulty:"
                value={difficulty}
                onChange={(value) => {
                    setDifficulty(value)
                }}
                options={[
                    ["any", "Any"],
                    ["easy", "Easy"],
                    ["medium", "Medium"],
                    ["hard", "Hard"],
                ]}
            />
            <SelectForm
                id="category"
                label="Category:"
                value={category}
                onChange={(value) => {
                    setCategory(value)
                }}
                options={[["any", "Any"]].concat(
                    categories.map((category) => [category.id, category.name])
                )}
            />
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
