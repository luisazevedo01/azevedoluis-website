import { Fragment } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
type Level = 1 | 2 | 3 | 4 | 5;

interface StarScaleProps {
  level: Level;
}

export default function StarScale({ level }: StarScaleProps) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i >= level) {
      stars.push(<AiOutlineStar />);
      continue;
    }
    stars.push(<AiFillStar key={i} color="yellow" />);
  }

  return <section>{stars}</section>;
}
