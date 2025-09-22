import {Size} from "@/shared/types/size-type";
import {ReactNode} from "react";
import {IconsEnum} from "@/shared/enums/icons_enum";

export type IconButtonProps = {
  onClick?: () => void;
  size?:Size;
  icon:IconsEnum
  ariaLabel: string;
  className?: string;
  visible?: boolean;
};