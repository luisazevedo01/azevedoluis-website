import { IconContext, IconType } from "react-icons";
import "./CardSlider.styles.scss";
import { GrCloudComputer } from "react-icons/gr";
export interface CardProps {
  title: string;
  description: string;
  Icon?: IconType;
}

const CardSlider = (props: any) => {
  return <div className="card-slider">{props.children}</div>;
};

export const Card = ({
  title,
  description,
  Icon = GrCloudComputer,
}: CardProps) => {
  return (
    <section className="card">
      <div className="card-bg">
        <Icon size="75px" className="card-icon" />
        <div className="card-description">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default CardSlider;
