import { Route, Routes, useNavigate } from "react-router-dom";
import { Button } from "./components/Button";
import { useTriviaStore } from "./store";
import { Setting } from "./views/Setting";
import { Trivia } from "./views/Trivia";

const ButtonList = () => {
  const navigate = useNavigate();
  const resetScore = useTriviaStore((state) => state.resetScore);
  const score = useTriviaStore((state) => state.score);

  return (
    <div className="flex flex-col">
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

export default function App() {
  const score = useTriviaStore((state) => state.score);
  const highscore = useTriviaStore((state) => state.highscore);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200 relative">
      <div className="absolute top-0 right-0 px-4 text-xl">
        <h2>Highscore: {highscore}</h2>
        <h2>Score: {score}</h2>
      </div>
      <h1 className="text-5xl font-bold mb-8">Fun Trivia</h1>
      <Routes>
        <Route path="/trivia" element={<Trivia />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/" element={<ButtonList />} />
      </Routes>
    </div>
  );
}
