import { ImHtmlFive2 } from "react-icons/im";
import { SiCss3, SiJavascript, SiTypescript } from "react-icons/si";
import "./Stack.styles.scss";

export default function Stack() {
  return (
    <div className="home_skillset-container">
      <section className="skillset-intro">
        <h1>Stack</h1>
        <p>
          i'm currently focused on developing my skills regarding my current
          tech stack but be sure that i still have plenty of energy left to
          learn new technologies and development approaches.
        </p>
      </section>
      <section className="skillset-skills">
        <article>
          <header>
            <SiJavascript />
            <h2>Javascript</h2>
          </header>
          <p>lorem ipsum</p>
        </article>
        <article>
          <header>
            <SiTypescript />
            <h2>Typescript</h2>
          </header>
          <p>lorem ipsum</p>
        </article>
        <article>
          <header>
            <ImHtmlFive2 />
            <h2>HTML</h2>
          </header>
          <p>lorem ipsum</p>
        </article>
        <article>
          <header>
            <SiCss3 />
            <h2>CSS</h2>
          </header>
          <p>lorem ipsum</p>
        </article>
      </section>
    </div>
  );
}
