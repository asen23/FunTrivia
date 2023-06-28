import { Button } from "@components";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Select } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTriviaStore } from "../store";
import {
  SettingDifficulty,
  SettingType,
  isSettingDifficulty,
  isSettingType,
} from "../store/setting";

const customTheme: CustomFlowbiteTheme["select"] = {
  field: {
    select: {
      base: "text-ellipsis block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      colors: {
        gray: "bg-base-200 border-gray-300 text-base-content focus:border-cyan-500 focus:ring-cyan-500",
      },
    },
  },
};

type SelectFormType = {
  id: string;
  label: string;
  value: string;
  onChange: (e: string) => void;
  options: {
    name: string;
    value: string;
  }[];
};
const SelectForm = ({
  id,
  label,
  value,
  onChange,
  options,
}: SelectFormType) => {
  return (
    <>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <Select
        className="my-2"
        theme={customTheme}
        name={id}
        id={id}
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      >
        {options.map(({ value, name }) => (
          <option value={value} key={value}>
            {name}
          </option>
        ))}
      </Select>
    </>
  );
};
export const Setting = () => {
  const [categories, setCategories] = useState<
    {
      id: string;
      name: string;
    }[]
  >([]);
  const navigate = useNavigate();
  const setting = useTriviaStore((state) => state.setting);
  const setType = useTriviaStore((state) => state.changeSettingType);
  const setDifficulty = useTriviaStore(
    (state) => state.changeSettingDifficulty
  );
  const setCategory = useTriviaStore((state) => state.changeSettingCategory);

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setCategories(response.trivia_categories);
      });
  }, []);

  return (
    <div className="flex flex-col w-40 text-xl">
      <SelectForm
        id="type"
        label="Type:"
        value={setting.type}
        onChange={(value) => {
          if (isSettingType(value)) {
            setType(value as SettingType);
          }
        }}
        options={[
          { value: "any", name: "Any" },
          { value: "multiple", name: "Multiple" },
          { value: "boolean", name: "True/False" },
        ]}
      />
      <SelectForm
        id="difficulty"
        label="Difficulty:"
        value={setting.difficulty}
        onChange={(value) => {
          if (isSettingDifficulty(value)) {
            setDifficulty(value as SettingDifficulty);
          }
        }}
        options={[
          { value: "any", name: "Any" },
          { value: "easy", name: "Easy" },
          { value: "medium", name: "Medium" },
          { value: "hard", name: "Hard" },
        ]}
      />
      <SelectForm
        id="category"
        label="Category:"
        value={setting.category}
        onChange={(value) => {
          setCategory(value);
        }}
        options={[{ value: "any", name: "Any" }].concat(
          categories.map((category) => ({
            value: category.id,
            name: category.name,
          }))
        )}
      />
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </Button>
    </div>
  );
};
