import { IconType } from "react-icons";

export interface Project {
  title: string;
  techStack: Array<string>;
  img: string;
  secondaryImg: string;
}

export type Tech = { title: string; Icon: IconType };
