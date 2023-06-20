import { StateCreator } from "zustand";
import { StoreState } from ".";

export type HighscoreSlice = {
  highscore: number;
  changeHighscore: (highscore: number) => void;
};

export const createHighscoreSlice: StateCreator<
  StoreState,
  [],
  [],
  HighscoreSlice
> = (set) => ({
  highscore: 0,
  changeHighscore: (highscore: number) => set(() => ({ highscore })),
});
