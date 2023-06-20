import { StateCreator } from "zustand";
import { StoreState } from ".";

const SettingTypeValues = ["any", "multiple", "boolean"] as const;
export type SettingType = (typeof SettingTypeValues)[number];
export const isSettingType = (value: string) => {
  return SettingTypeValues.includes(value as SettingType);
};
const SettingDifficultyValues = ["any", "easy", "medium", "hard"] as const;
export type SettingDifficulty = (typeof SettingDifficultyValues)[number];
export const isSettingDifficulty = (value: string) => {
  return SettingDifficultyValues.includes(value as SettingDifficulty);
};
type Setting = {
  type: SettingType;
  difficulty: SettingDifficulty;
  category: string;
};
export type SettingSlice = {
  setting: Setting;
  changeSettingType: (setting: SettingType) => void;
  changeSettingDifficulty: (setting: SettingDifficulty) => void;
  changeSettingCategory: (setting: string) => void;
};

export const createSettingSlice: StateCreator<
  StoreState,
  [],
  [],
  SettingSlice
> = (set) => ({
  setting: {
    type: "any",
    difficulty: "any",
    category: "any",
  },
  changeSettingType: (type: SettingType) =>
    set((state) => ({ setting: { ...state.setting, type } })),
  changeSettingDifficulty: (difficulty: SettingDifficulty) =>
    set((state) => ({ setting: { ...state.setting, difficulty } })),
  changeSettingCategory: (category: string) =>
    set((state) => ({ setting: { ...state.setting, category } })),
});
