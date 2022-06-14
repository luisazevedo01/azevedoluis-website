import { useParams } from "react-router-dom";
import "./ProjectDetails.styles.scss";
import hiw from "../../assets/projects/freedev/how-it-works-min.png";

const ProjectDetails = () => {
  const params = useParams();
  console.log("params: ", params.projectID);
  return (
    <div className="project-details">
      <header>
        <h1>{params.projectID}</h1>
        <h3>Small intro about the project.</h3>
      </header>
      <section className="project-details_show-case">
        <img width="50%" height="100%" src={hiw} />
        <img width="50%" height="100%" src={hiw} />
      </section>
    </div>
  );
};

export default ProjectDetails;
