import { Button as FlowbiteButton } from "flowbite-react";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<typeof FlowbiteButton>;
export const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <FlowbiteButton
      className={twMerge("bg-primary text-primary-content", className)}
      {...props}
    />
  );
};
