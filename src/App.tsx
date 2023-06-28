import { ThemeToggle } from "@components";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useTriviaStore } from "./store";
import { Home } from "./views/Home";
import { Setting } from "./views/Setting";
import { Trivia } from "./views/Trivia";
import { DARK_THEME, LIGHT_THEME } from "@config/theme";

export const App = () => {
  const score = useTriviaStore((state) => state.score);
  const highscore = useTriviaStore((state) => state.highscore);
  const theme = useTriviaStore((state) => state.theme);
  const changeTheme = useTriviaStore((state) => state.changeTheme);
  const checked = theme === DARK_THEME;
  useEffect(() => {
    if (theme === "default") {
      changeTheme(
        window.matchMedia?.("(prefers-color-scheme: dark)").matches
          ? DARK_THEME
          : LIGHT_THEME
      );
    }
    document.documentElement.classList.value = theme;
  }, [theme, changeTheme]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 relative">
      <div className="absolute top-0 left-0 px-4 text-xl">
        <h2>Highscore: {highscore}</h2>
        <h2>Score: {score}</h2>
      </div>
      <div className="absolute top-0 right-0 px-4 text-xl">
        <ThemeToggle
          checked={checked}
          onCheckedChange={(checked) => {
            changeTheme(checked ? DARK_THEME : LIGHT_THEME);
          }}
        />
      </div>
      <h1 className="text-5xl font-bold mb-8">Fun Trivia</h1>
      <Routes>
        <Route path="/trivia" element={<Trivia />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
