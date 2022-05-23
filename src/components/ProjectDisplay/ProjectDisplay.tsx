interface ProjectDisplayProps {
  name: string;
}

const ProjectDisplay = ({ name }: ProjectDisplayProps) => {
  return <h1>{name}</h1>;
};

export default ProjectDisplay;
