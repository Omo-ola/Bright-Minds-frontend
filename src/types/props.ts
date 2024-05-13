import { ChangeEvent, ReactElement } from "react";
import { IconBaseProps} from "react-icons";
import { LinkProps } from "react-router-dom";

export interface ChildrenProps {
  children: React.ReactNode;
}
export interface FormData {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
}


export interface FormFields {
  [key: string]: string;
}

export type ChangeHandler = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => void;


export interface SidebarLinkProps extends LinkProps {
  text: string;
  icon: ReactElement<IconBaseProps>;
}