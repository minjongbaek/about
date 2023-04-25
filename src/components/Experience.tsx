import type { PropsWithChildren } from "react";

const Experience = ({ children }: PropsWithChildren) => {
  return <div className="flex gap-10">{children}</div>;
};

const ExperienceInfo = ({
  title,
  period,
}: {
  title: string;
  period?: string;
}) => {
  return (
    <div className="w-80">
      <p className="font-bold">{title}</p>
      {period && <p>{period}</p>}
    </div>
  );
};

const ExperienceDetail = ({
  skill,
  experiences,
}: {
  skill?: string;
  experiences: string[];
}) => {
  const experienceList = getExperienceList(experiences);

  return (
    <div className="flex flex-col w-full">
      {skill && <p>사용 기술: {skill}</p>}
      {experienceList}
    </div>
  );
};

const getExperienceList = (experiences: string[] | string[][]) => {
  return (
    <ul className="list-disc ml-4">
      {experiences.map((experience) => {
        if (Array.isArray(experience)) return getExperienceList(experience);
        return <li key={experience}>{experience}</li>;
      })}
    </ul>
  );
};

Experience.Info = ExperienceInfo;
Experience.Detail = ExperienceDetail;

export default Experience;
