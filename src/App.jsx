import { useState, useEffect } from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import Button from "./Components/Button"
import Trivia from "./Components/Trivia"
import Setting from "./Components/Setting"

export default function App() {
    const [highscore, setHighscore] = useState(0)
    const [score, setScore] = useState(0)
    const [hasOldScore, setHasOldScore] = useState(false)
    const [setting, setSetting] = useState({
        type: "multiple",
        category: "any",
        difficulty: "any",
    })

    const history = useHistory()

    useEffect(() => {
        let lastHighscore = localStorage.getItem("highscore")
        if (lastHighscore != null) {
            setHighscore(parseInt(lastHighscore))
        }
        let lastScore = sessionStorage.getItem("lastscore")
        if (lastScore != null) {
            setHasOldScore(true)
        }
        let lastSetting = localStorage.getItem("setting")
        if (lastSetting != null) {
            setSetting(JSON.parse(lastSetting))
        }
    }, [])

    const getURL = () => {
        let type = ""
        if (setting.type !== "any") {
            type = "&type=" + encodeURIComponent(setting.type)
        }
        let category = ""
        if (setting.category !== "any") {
            category = "&category=" + encodeURIComponent(setting.category)
        }
        let difficulty = ""
        if (setting.difficulty !== "any") {
            difficulty = "&difficulty=" + encodeURIComponent(setting.difficulty)
        }
        return (
            "https://opentdb.com/api.php?amount=1" +
            type +
            category +
            difficulty
        )
    }

    const ButtonList = () => {
        let Continue = null

        if (hasOldScore) {
            Continue = (
                <Button
                    name="Continue"
                    onClick={() => {
                        history.push("/trivia")
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
                        history.push("/trivia")
                        setScore(0)
                    }}
                />
                {Continue}
                <Button
                    name="Setting"
                    onClick={() => {
                        history.push("/setting")
                    }}
                />
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
            <Switch>
                <Route path="/trivia">
                    <Trivia
                        url={getURL()}
                        exit={() => {
                            history.push("/")
                        }}
                        onAnswer={(point) => {
                            if (score + point !== 0 && !hasOldScore) {
                                setHasOldScore(true)
                            }
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
                </Route>
                <Route path="/setting">
                    <Setting
                        onBack={(type, difficulty, category) => {
                            history.push("/")
                            setSetting({
                                type: type,
                                category: category,
                                difficulty: difficulty,
                            })
                            localStorage.setItem(
                                "setting",
                                JSON.stringify({
                                    type: type,
                                    category: category,
                                    difficulty: difficulty,
                                })
                            )
                        }}
                        setting={setting}
                    />
                </Route>
                <Route path="/">
                    <ButtonList />
                </Route>
            </Switch>
        </div>
    )
}