import { IconType } from "react-icons";
import "./StackList.styles.scss";
export type Tech = { title: string; Icon: IconType };

interface StarScaleProps {
  lstSkill: Array<Tech>;
}

export default function StackList({ lstSkill }: StarScaleProps) {
  return (
    <div className="stack_list">
      {lstSkill.map(({ Icon, title }) => {
        return (
          <span>
            <Icon />
            <h5>{title}</h5>
          </span>
        );
      })}
    </div>
  );
}
