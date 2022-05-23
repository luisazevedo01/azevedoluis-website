import { IconType } from "react-icons";
import "./StackList.styles.scss";
export type Tech = { title: string; Icon: IconType };

interface StarScaleProps {
  lstSkill: Array<Tech>;
}

export default function StackList({ lstSkill }: StarScaleProps) {
  return (
    <section className="stack_list">
      <ul>
        {lstSkill.map(({ Icon, title }) => {
          return (
            <li>
              <Icon />
              <li>{title}</li>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
