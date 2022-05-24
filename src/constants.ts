import { AiOutlineConsoleSql } from "react-icons/ai";
import { ImHtmlFive2 } from "react-icons/im";
import {
  SiCss3,
  SiMicrosoft,
  SiJavascript,
  SiJava,
  SiTypescript,
} from "react-icons/si";
import { Tech } from "./components/StackList/StackList";

export const TECH_STACK: Array<Tech> = [
  { title: "JAVASCRIPT", Icon: SiJavascript },
  { title: "TYPESCRIPT", Icon: SiTypescript },
  { title: "HTML", Icon: ImHtmlFive2 },
  { title: "CSS", Icon: SiCss3 },
  { title: "C#", Icon: SiMicrosoft },
  { title: "JAVA", Icon: SiJava },
  { title: "SQL", Icon: AiOutlineConsoleSql },
];
