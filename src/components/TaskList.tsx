import { useId } from "react";

const TaskList = ({ experiences }: { experiences: (string | string[])[] }) => {
  const id = useId();
  return (
    <ul
      className="flex flex-col gap-2 list-disc ml-4 font-light"
      key={`ul-${id}`}
    >
      {experiences.map((experience) => {
        if (Array.isArray(experience))
          return TaskList({ experiences: experience });
        return <li key={`li-${id}-${experience}`}>{experience}</li>;
      })}
    </ul>
  );
};

export default TaskList;
