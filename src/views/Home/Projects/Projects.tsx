import ProjectDisplay from "../../../components/ProjectDisplay/ProjectDisplay";
import "./Projects.styles.scss";
import lenderImg from "../../../assets/projects/lender/landing.png";
import aurochsImg from "../../../assets/projects/aurochs/home_aurochs.png";
import freedevImg from "../../../assets/projects/freedev/landing_home.png";

export default function Projects() {
  return (
    <div className="home_projects-container">
      <header>
        <h5>PROJECTS</h5>
        <h3>My latest development portfolio projects.</h3>
      </header>
      <section>
        <ProjectDisplay
          name="Aurochs"
          techStack={["HTML", "CSS"]}
          image={aurochsImg}
        />
        <ProjectDisplay
          name="Lender"
          techStack={["HTML", "CSS"]}
          image={lenderImg}
        />
        <ProjectDisplay
          name="FreeDev"
          techStack={["HTML", "CSS"]}
          image={freedevImg}
        />
      </section>
    </div>
  );
}
