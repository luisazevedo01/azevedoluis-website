import ProjectDisplay from "../../../components/ProjectDisplay/ProjectDisplay";
import "./Projects.styles.scss";

export default function Projects() {
  return (
    <div className="home_projects-container">
      <h5>MY PROJECTS</h5>
      <h1>Work I have done</h1>
      <ProjectDisplay name="Aurochs" />
      <ProjectDisplay name="Lender" />
      <ProjectDisplay name="OlympusPRO" />
    </div>
  );
}
