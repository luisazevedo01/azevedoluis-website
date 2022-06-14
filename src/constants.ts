import { AiOutlineConsoleSql } from "react-icons/ai";
import { ImHtmlFive2 } from "react-icons/im";
import {
  SiCss3,
  SiMicrosoft,
  SiJavascript,
  SiJava,
  SiTypescript,
} from "react-icons/si";
import lenderLanding from "./assets/projects/lender/landing-min.png";
import lenderHowItWorks from "./assets/projects/lender/how-it-works-min.png";
import homeAurochs from "./assets/projects/aurochs/home_aurochs-min.png";
import meetAurochs from "./assets/projects/aurochs/meet_aurochs-min.png";
import landingFd from "./assets/projects/freedev/landing_home-min.png";
import howItWorksFd from "./assets/projects/freedev/how-it-works-min.png";
import proPartners from "./assets/projects/olympus/pro_partners-min.png";
import proTokens from "./assets/projects/olympus/pro_tokens-min.png";

import { GrCloudComputer } from "react-icons/gr";

import { Certificate, Project, Tech } from "./types";
import { Work } from "./views/Home/Work/Work";

export const WORK_EXPERIENCE: Array<Work> = [
  {
    title: `<span style="color:#609BFF">iTech-on</span>, Junior Fullstack Developer`,
    description:
      "Developing both frontend and backend features, creating SQL views, and adapting the database architecture whenever necessary. Identifying and creating issues based on documentation and customer feedback.",
  },

  {
    title: `<span style="color:#3CC74E">Auroch</span>, Junior React Developer / Co-founder`,
    description:
      "Discussion of products and ideas, understanding and defining architectures based on the client's needs. Responsible for front-end development.",
  },
  {
    title: `<span style="color:#E95D90">OlympusDAO</span>, React Developer`,
    description:
      "Developing front-end features/solving bugs with React/NextJS, while consuming data from various blockchains. Refactoring JSX to TSX.",
  },
];

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
    techStack: ["HTML", "SCSS", "TYPESCRIPT", "STORYBOOK", "REACT"],
    img: lenderLanding,
    secondaryImg: lenderHowItWorks,
  },
  {
    title: "FreeDev",
    techStack: ["HTML", "SCSS", "JAVASCRIPT", "REACT"],
    img: landingFd,
    secondaryImg: howItWorksFd,
  },
  {
    title: "OlympusPRO",
    techStack: [
      "HTML",
      "MUI",
      "JAVASCRIPT",
      "TYPESCRIPT",
      "REACT",
      "REDUX",
      "ETHERJS",
    ],
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
];
