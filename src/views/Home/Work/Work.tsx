import { WORK_EXPERIENCE } from "../../../constants";
import "./Work.styles.scss";

export interface Work {
  title: string;
  description: string;
}

export default function Work() {
  return (
    <div className="home_work-container">
      <header>
        <h5>WORK EXPERIENCE</h5>
        <h3>Organizations I have worked for in the past.</h3>
      </header>
      <section id="home_works">
        {WORK_EXPERIENCE.map((_work, index) => {
          return (
            <span key={index}>
              <h1>0{index + 1}</h1>
              <h2 dangerouslySetInnerHTML={{ __html: _work.title }}></h2>
              <p>{_work.description}</p>
            </span>
          );
        })}
      </section>
    </div>
  );
}
