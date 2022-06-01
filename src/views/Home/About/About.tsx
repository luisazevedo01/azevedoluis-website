import "./About.styles.scss";
import { ReactComponent as Stack1 } from "../../../assets/stack-2.svg";

export default function About() {
  return (
    <div className="home_values-container">
      <section>
        <header>
          <h1>About</h1>
        </header>
        <p>
          My journey started when I got accepted into Academia de Código's
          Bootcamp, where I learned the taste of code but specifically to be an
          autodidact. With a pile of energy to spare, I uncovered a passion for
          blockchain. Being part of a DAO(Decentralized Autonomous Organization)
          has increased my curiosity about blockchain while developing my
          frontend skills. Today I am looking for new projects that will
          challenge me and make me a better developer.
        </p>
      </section>

      <Stack1 width="80%" height="100%" />
    </div>
  );
}
