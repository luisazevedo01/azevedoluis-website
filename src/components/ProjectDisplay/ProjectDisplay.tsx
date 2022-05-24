import "./ProjectDisplay.styles.scss";

interface ProjectDisplayProps {
  name: string;
  techStack: Array<string>;
  image: string;
}

interface TechTagListProps {
  techList: Array<string>;
}

const ProjectDisplay = ({ name, techStack, image }: ProjectDisplayProps) => {
  return (
    <div className="project_display">
      <header>
        <h1>{name}</h1>
      </header>
      <img src={image} width="100%" />
      <TechTagList techList={techStack} />
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
