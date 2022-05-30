import { Tech } from "../../types";
import "./StackList.styles.scss";

interface StarScaleProps {
  lstSkill: Array<Tech>;
}

export default function StackList({ lstSkill }: StarScaleProps) {
  return (
    <div className="stack_list">
      {lstSkill.map(({ Icon, title }: Tech, index) => {
        return (
          <span key={index}>
            <Icon />
            <h5>{title}</h5>
          </span>
        );
      })}
    </div>
  );
}
