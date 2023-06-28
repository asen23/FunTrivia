import { Icon } from "@iconify-icon/react";
import loadingIcon from "@iconify/icons-svg-spinners/90-ring";
import { ComponentProps } from "react";

export const LoadingIcon = (
  props: Omit<ComponentProps<typeof Icon>, "icon" | "ref">
) => {
  return <Icon icon={loadingIcon} height="10rem" {...props} />;
};

export { Icon };
