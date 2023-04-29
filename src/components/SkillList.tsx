import type { Skill } from "@/types/skill";
import Label from "./Base/Label";

const SkillList = ({ skills }: { skills: Skill[] }) => {
  return (
    <div className="flex gap-1">
      {skills.map(({ id, text }) => (
        <Label key={id}>{text}</Label>
      ))}
    </div>
  );
};

export default SkillList;
