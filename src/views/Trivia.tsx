import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { useTriviaStore } from "../store";

type TriviaResponse = {
  results: TriviaData[];
};
type TriviaData = {
  category: string;
  type: string;
  difficulty: "easy" | "medium" | "hard";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export const Trivia = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [trivia, setTrivia] = useState<TriviaData | undefined>(undefined);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);
  const retry = useRef(0);
  const [isError, setIsError] = useState(false);
  const setting = useTriviaStore((state) => state.setting);
  const navigate = useNavigate();
  const addScore = useTriviaStore((state) => state.addScore);

  const getURL = useCallback(() => {
    let type = "";
    if (setting.type !== "any") {
      type = "&type=" + encodeURIComponent(setting.type);
    }
    let category = "";
    if (setting.category !== "any") {
      category = "&category=" + encodeURIComponent(setting.category);
    }
    let difficulty = "";
    if (setting.difficulty !== "any") {
      difficulty = "&difficulty=" + encodeURIComponent(setting.difficulty);
    }
    return (
      "https://opentdb.com/api.php?amount=1" + type + category + difficulty
    );
  }, [setting.category, setting.difficulty, setting.type]);

  const getTrivia = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(getURL(), {
      mode: "cors",
    });
    if (response.status !== 200) {
      if (retry.current === 3) {
        setIsError(true);
        return;
      }
      retry.current += 1;
      getTrivia();
      return;
    }
    retry.current = 0;
    const data = (await response.json()) as TriviaResponse;
    setTrivia(data.results[0]);
    const allAnswer = data.results[0].incorrect_answers;
    allAnswer.push(data.results[0].correct_answer);
    allAnswer.sort(() => 0.5 - Math.random());
    setAnswers(allAnswer);
    setIsLoading(false);
  }, [getURL]);

  useEffect(() => {
    getTrivia();
  }, [getTrivia]);

  const checkAnswer = (answer: string) => {
    if (trivia === undefined) return;
    setIsCorrect(answer === trivia.correct_answer);
    const correctScores = {
      easy: 25,
      medium: 50,
      hard: 100,
    };
    const incorrectScores = {
      easy: 0,
      medium: -10,
      hard: -25,
    };
    if (answer === trivia.correct_answer) {
      addScore(correctScores[trivia.difficulty]);
    } else {
      addScore(incorrectScores[trivia.difficulty]);
    }
  };

  const ButtonList = () => {
    return (
      <>
        <Button
          name="Play Again"
          onClick={() => {
            setIsCorrect(undefined);
            getTrivia();
          }}
        />
        <Button
          name="Exit"
          onClick={() => {
            navigate("/");
          }}
        />
      </>
    );
  };

  if (isLoading) {
    return (
      <img
        src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
        alt="loading"
      />
    );
  } else if (isError) {
    return (
      <div className="w-3/4">
        <h1>An error has occurred</h1>
        <ButtonList />
      </div>
    );
  } else {
    return (
      <div className="w-3/4">
        <p className="m-1 text-xl">Category: {trivia?.category}</p>
        <p className="m-1 text-xl">Difficulty: {trivia?.difficulty}</p>
        <p
          className="m-1 text-2xl mt-4"
          dangerouslySetInnerHTML={{ __html: trivia?.question ?? "" }}
        ></p>
        {isCorrect === undefined ? (
          <div className="flex flex-wrap gap-2 mt-4">
            {answers.map((answer) => (
              <button
                className="w-1/3 p-3 text-3xl bg-gray-500 rounded-xl grow"
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
            <h1 className="text-green-400 text-4xl">Correct</h1>
            <ButtonList />
          </div>
        ) : (
          <div>
            <h1 className="text-red-600 text-4xl">Wrong</h1>
            <h2
              className="text-bold text-3xl"
              dangerouslySetInnerHTML={{
                __html: "The correct answer is " + trivia?.correct_answer,
              }}
            ></h2>
            <ButtonList />
          </div>
        )}
      </div>
    );
  }
};
