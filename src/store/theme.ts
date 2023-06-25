import { StateCreator } from "zustand";
import { StoreState } from ".";

export type ThemeSlice = {
  theme: string;
  changeTheme: (theme: string) => void;
};

export const createThemeSlice: StateCreator<StoreState, [], [], ThemeSlice> = (
  set
) => ({
  theme: "default",
  changeTheme: (theme: string) => set(() => ({ theme })),
});
