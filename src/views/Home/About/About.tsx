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
          blockchain. Today I am a part of a DAO(Decentralized Autonomous
          Organization) where I'm close to the blockchain world while developing
          my frontend skills.
        </p>
      </section>

      <Stack1 width="80%" height="100%" />
    </div>
  );
}
