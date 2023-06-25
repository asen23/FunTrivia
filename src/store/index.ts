import { create } from "zustand";
import { persist } from "zustand/middleware";
import { HighscoreSlice, createHighscoreSlice } from "./highscore";
import { ScoreSlice, createScoreSlice } from "./score";
import { SettingSlice, createSettingSlice } from "./setting";
import { ThemeSlice, createThemeSlice } from "./theme";

export type StoreState = ScoreSlice &
  HighscoreSlice &
  SettingSlice &
  ThemeSlice;
export const useTriviaStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createScoreSlice(...a),
      ...createHighscoreSlice(...a),
      ...createSettingSlice(...a),
      ...createThemeSlice(...a),
    }),
    { name: "trivia_data" }
  )
);
