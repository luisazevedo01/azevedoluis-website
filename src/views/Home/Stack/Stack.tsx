import "./Stack.styles.scss";
import StackList from "../../../components/StackList/StackList";
import { TECH_STACK } from "../../../constants";

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
        <StackList lstSkill={TECH_STACK} />
      </section>
    </div>
  );
}
