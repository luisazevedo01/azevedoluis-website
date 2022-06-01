import "./ProjectDisplay.styles.scss";

interface ProjectDisplayProps {
  name: string;
  techStack: Array<string>;
  image: string;
  secondaryImg: string;
}

interface TechTagListProps {
  techList: Array<string>;
}

const ProjectDisplay = ({
  name,
  techStack,
  image,
  secondaryImg,
}: ProjectDisplayProps) => {
  return (
    <div className="project">
      <header>
        <h4>{name}</h4>
      </header>
      <section>
        <img className="project_fst-img" src={image} width="100%" alt={name} />
        <TechTagList techList={techStack} />
        <img
          className="project_lst-img"
          src={secondaryImg}
          width="100%"
          alt={`secondary${name}`}
        />
      </section>
    </div>
  );
};

const TechTagList = ({ techList }: TechTagListProps) => {
  return (
    <ul className="tech_list">
      {techList.map((tech: string, index) => (
        <li key={index}>{tech}</li>
      ))}
    </ul>
  );
};

export default ProjectDisplay;
