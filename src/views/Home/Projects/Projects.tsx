import ProjectDisplay from "../../../components/ProjectDisplay/ProjectDisplay";
import "./Projects.styles.scss";
import { PROJECTS } from "../../../constants";
import { Project } from "../../../types";

export default function Projects() {
  return (
    <div className="projects">
      <header className="projects-header">
        <h5>PROJECTS</h5>
        <h3>My latest projects.</h3>
      </header>
      <section className="projects-container">
        {PROJECTS.map(
          ({ title, techStack, img, secondaryImg }: Project, index) => {
            return (
              <ProjectDisplay
                key={index}
                name={title}
                techStack={techStack}
                image={img}
                secondaryImg={secondaryImg}
              />
            );
          }
        )}
      </section>
    </div>
  );
}
