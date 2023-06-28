import { Button } from "@components";
import { useNavigate } from "react-router-dom";
import { useTriviaStore } from "../store";

export const Home = () => {
  const navigate = useNavigate();
  const resetScore = useTriviaStore((state) => state.resetScore);
  const score = useTriviaStore((state) => state.score);

  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={() => {
          navigate("/trivia");
          resetScore();
        }}
      >
        Play
      </Button>
      {score !== 0 && (
        <Button
          onClick={() => {
            navigate("/trivia");
          }}
        >
          Continue
        </Button>
      )}
      <Button
        onClick={() => {
          navigate("/setting");
        }}
      >
        Setting
      </Button>
    </div>
  );
};
