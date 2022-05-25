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
        <h4>{name}</h4>
      </header>
      <section>
        <img src={image} width="100%" />
        <TechTagList techList={techStack} />
      </section>
    </div>
  );
};

const TechTagList = ({ techList }: TechTagListProps) => {
  return (
    <ul className="tech_list">
      {techList.map((el) => (
        <li>{el}</li>
      ))}
    </ul>
  );
};

export default ProjectDisplay;
