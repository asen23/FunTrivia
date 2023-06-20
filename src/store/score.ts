import { StateCreator } from "zustand";
import { StoreState } from ".";

export type ScoreSlice = {
  score: number;
  addScore: (score: number) => void;
  resetScore: () => void;
};

export const createScoreSlice: StateCreator<StoreState, [], [], ScoreSlice> = (
  set
) => ({
  score: 0,
  addScore: (score: number) =>
    set((state) => {
      const newScore = state.score + score;
      let highscore = state.highscore;
      if (newScore > state.highscore) {
        highscore = newScore;
      }
      return {
        score: newScore,
        highscore,
      };
    }),
  resetScore: () => set(() => ({ score: 0 })),
});
