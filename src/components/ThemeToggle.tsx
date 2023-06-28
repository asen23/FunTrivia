import { Icon } from "./iconify";
import { Switch } from "./radix";

type ThemeToggleProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};
export const ThemeToggle = ({ checked, onCheckedChange }: ThemeToggleProps) => {
  return (
    <Switch.Root
      checked={checked}
      onCheckedChange={onCheckedChange}
      className="border border-base-content w-16 h-8 rounded-2xl box-content relative"
    >
      <Switch.Thumb
        className={`h-6 w-6 rounded-full transition-all absolute top-1 flex justify-center items-center ${
          checked
            ? "translate-x-9 bg-opacity-100 border-opacity-100"
            : "translate-x-1 bg-opacity-50 border-opacity-20 opacity-0"
        }`}
      >
        <Icon
          icon="ic:outline-dark-mode"
          height="1rem"
          className="text-base-content"
        />
      </Switch.Thumb>
      <Switch.Thumb
        className={`h-6 w-6 rounded-full transition-all absolute top-1 flex justify-center items-center ${
          checked ? "translate-x-9  opacity-0" : "translate-x-1 "
        }`}
      >
        <Icon
          icon="ic:outline-light-mode"
          height="1rem"
          className="text-base-content"
        />
      </Switch.Thumb>
    </Switch.Root>
  );
};
