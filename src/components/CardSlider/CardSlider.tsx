import "./CardSlider.styles.scss";

const CardSlider = (props: any) => {
  return <div>{props.children}</div>;
};

export const Card = (props: any) => {
  return <section className="card">card{props.children}</section>;
};

export default CardSlider;
