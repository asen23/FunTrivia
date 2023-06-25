import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { useTriviaStore } from "../store";

export const Home = () => {
  const navigate = useNavigate();
  const resetScore = useTriviaStore((state) => state.resetScore);
  const score = useTriviaStore((state) => state.score);

  return (
    <div className="flex flex-col gap-2">
      <Button
        name="Play"
        onClick={() => {
          navigate("/trivia");
          resetScore();
        }}
      />
      {score !== 0 && (
        <Button
          name="Continue"
          onClick={() => {
            navigate("/trivia");
          }}
        />
      )}
      <Button
        name="Setting"
        onClick={() => {
          navigate("/setting");
        }}
      />
    </div>
  );
};
