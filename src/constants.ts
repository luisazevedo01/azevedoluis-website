import { AiOutlineConsoleSql } from "react-icons/ai";
import { ImHtmlFive2 } from "react-icons/im";
import {
  SiCss3,
  SiMicrosoft,
  SiJavascript,
  SiJava,
  SiTypescript,
} from "react-icons/si";
import lenderLanding from "./assets/projects/lender/landing.png";
import lenderHowItWorks from "./assets/projects/lender/how-it-works.png";
import homeAurochs from "./assets/projects/aurochs/home_aurochs.png";
import meetAurochs from "./assets/projects/aurochs/meet_aurochs.png";
import landingFd from "./assets/projects/freedev/landing_home.png";
import howItWorksFd from "./assets/projects/freedev/how-it-works.png";
import proPartners from "./assets/projects/olympus/pro_partners.png";
import proTokens from "./assets/projects/olympus/pro_tokens.png";

import { GrCloudComputer } from "react-icons/gr";
import { BiCodeBlock } from "react-icons/bi";

import { Certificate, Project, Tech } from "./types";

export const TECH_STACK: Array<Tech> = [
  { title: "JAVASCRIPT", Icon: SiJavascript },
  { title: "TYPESCRIPT", Icon: SiTypescript },
  { title: "HTML", Icon: ImHtmlFive2 },
  { title: "CSS", Icon: SiCss3 },
  { title: "C#", Icon: SiMicrosoft },
  { title: "JAVA", Icon: SiJava },
  { title: "SQL", Icon: AiOutlineConsoleSql },
];

export const PROJECTS: Project[] = [
  {
    title: "Aurochs",
    techStack: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
    img: homeAurochs,
    secondaryImg: meetAurochs,
  },
  {
    title: "Lender",
    techStack: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
    img: lenderLanding,
    secondaryImg: lenderHowItWorks,
  },
  {
    title: "FreeDev",
    techStack: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
    img: landingFd,
    secondaryImg: howItWorksFd,
  },
  {
    title: "OlympusPRO",
    techStack: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
    img: proTokens,
    secondaryImg: proPartners,
  },
];

export const CERTIFICATIONS: Certificate[] = [
  {
    title: "AWS Cloud Practitioner",
    description:
      "Earning AWS Certified Cloud Practitioner validates cloud fluency and foundational AWS knowledge.",
    Icon: GrCloudComputer,
  },
  {
    title: "Academia de Código",
    description:
      "Intensive Programming Bootcamp Full-Stack, JAVA and JavaScript",
    Icon: BiCodeBlock,
  },
];
