import Label from "./Base/Label";

const SkillList = ({ skills }: { skills: string[] }) => {
  return (
    <div className="flex gap-1">
      {skills.map((skill) => (
        <Label key={skill}>{skill}</Label>
      ))}
    </div>
  );
};

export default SkillList;
