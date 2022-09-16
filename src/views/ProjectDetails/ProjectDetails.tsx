import { useParams } from "react-router-dom";
import "./ProjectDetails.styles.scss";
import { Project } from "../../types";
import { PROJECTS } from "../../constants";

const ProjectDetails = () => {
  const params = useParams();
  const project = PROJECTS.find((el: Project) => el.title === params.projectID);
  const windowSize = window.innerWidth;

  console.log(windowSize);
  return (
    <div className="project-details">
      <header>
        <h1>{project?.title}</h1>
      </header>
      <section className="project-details_description">
        <h3>{project?.description}</h3>
      </section>
      <hr />
      <section className="project-details_show-case">
        <img width="100%" src={project?.img} />
        <img width="100%" src={project?.secondaryImg} />
      </section>
      <section>
        <p>tech</p>
      </section>
    </div>
  );
};

export default ProjectDetails;
