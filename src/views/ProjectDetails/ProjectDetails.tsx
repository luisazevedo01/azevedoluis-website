import { useParams } from "react-router-dom";
import "./ProjectDetails.styles.scss";
import { Project } from "../../types";
import { PROJECTS } from "../../constants";

const ProjectDetails = () => {
  const params = useParams();
  const project = PROJECTS.find((el: Project) => el.title === params.projectID);

  return (
    <div className="project-details">
      <header>
        <h1>{project?.title}</h1>
      </header>
      <section className="project-details_description">
        <h3>{project?.description}</h3>
      </section>
      <section className="project-details_show-case">
        <img width="48%" height="100%" src={project?.img} />
        <img width="48%" height="100%" src={project?.secondaryImg} />
      </section>
    </div>
  );
};

export default ProjectDetails;
