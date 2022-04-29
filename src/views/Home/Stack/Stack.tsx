import { ImHtmlFive2 } from "react-icons/im";
import {
  SiCss3,
  SiMicrosoft,
  SiJavascript,
  SiJava,
  SiTypescript,
  SiLinux,
} from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import StarScale from "../../../components/StarScale/StarScale";
import "./Stack.styles.scss";

export default function Stack() {
  return (
    <div className="stack-container">
      <section className="stack-intro">
        <h1>Stack</h1>
        <p>
          I'm currently focused on developing my skills regarding my current
          tech stack and willing to learn new technologies and development
          approaches.
        </p>
      </section>
      <section className="stack-skills">
        <div>
          <header>
            <SiJavascript />
            <h2>Javascript</h2>
          </header>
          <StarScale level={4} />
        </div>

        <div>
          <header>
            <SiTypescript />
            <h2>Typescript</h2>
          </header>
          <StarScale level={4} />
        </div>

        <div>
          <header>
            <ImHtmlFive2 />
            <h2>HTML</h2>
          </header>
          <StarScale level={4} />
        </div>

        <div>
          <header>
            <SiCss3 />
            <h2>CSS</h2>
          </header>
          <StarScale level={4} />
        </div>
        <div>
          <header>
            <SiMicrosoft />
            <h2>C# / .NET</h2>
          </header>
          <StarScale level={3} />
        </div>
        <div>
          <header>
            <SiJava />
            <h2>Java</h2>
          </header>
          <StarScale level={2} />
        </div>
        <div>
          <header>
            <AiOutlineConsoleSql />
            <h2>SQL</h2>
          </header>
          <StarScale level={2} />
        </div>
        <div>
          <header>
            <SiLinux />
            <h2>Linux</h2>
          </header>
          <StarScale level={2} />
        </div>
      </section>
    </div>
  );
}
