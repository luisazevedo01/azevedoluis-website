import { IconType } from "react-icons";

export interface Project {
  title: string;
  description: string;
  techStack: Array<string>;
  img: string;
  secondaryImg: string;
}

export interface Certificate {
  title: string;
  description: string;
  Icon: IconType;
}

export type Tech = { title: string; Icon: IconType };
