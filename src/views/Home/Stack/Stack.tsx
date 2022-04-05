import { ImHtmlFive2 } from "react-icons/im";
import { SiCss3, SiJavascript, SiTypescript } from "react-icons/si";
import StarScale from "../../../components/StarScale/StarScale";
import "./Stack.styles.scss";

export default function Stack() {
  return (
    <div className="stack-container">
      <section className="stack-intro">
        <h1>Stack</h1>
        <p>
          I'm currently focused on developing my skills regarding my current
          tech stack but be sure that i still have plenty of energy left to
          learn new technologies and development approaches.
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
          <StarScale level={3} />
        </div>

        <div>
          <header>
            <ImHtmlFive2 />
            <h2>HTML</h2>
          </header>
          <StarScale level={3} />
        </div>

        <div>
          <header>
            <SiCss3 />
            <h2>CSS</h2>
          </header>
          <StarScale level={3} />
        </div>
      </section>
    </div>
  );
}
