import { IconType } from "react-icons";
import "./StackList.styles.scss";
export type Tech = { title: string; Icon: IconType };

interface StarScaleProps {
  lstSkill: Array<Tech>;
}

export default function StackList({ lstSkill }: StarScaleProps) {
  console.log(lstSkill);
  return (
    <section className="stack_list">
      <ul>
        {lstSkill.map((el) => (
          <li>{el.title}</li>
        ))}
      </ul>
    </section>
  );
}
