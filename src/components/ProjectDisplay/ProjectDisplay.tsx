import "./ProjectDisplay.styles.scss";

interface ProjectDisplayProps {
  name: string;
}

interface TechTagListProps {
  techList: Array<string>;
}

const ProjectDisplay = ({ name }: ProjectDisplayProps) => {
  return (
    <div className="project_display">
      <h1>{name}</h1>
      <TechTagList techList={["HTML", "CSS"]} />
    </div>
  );
};

const TechTagList = ({ techList }: TechTagListProps) => {
  return (
    <ul>
      {techList.map((el) => (
        <li>{el}</li>
      ))}
    </ul>
  );
};

export default ProjectDisplay;
