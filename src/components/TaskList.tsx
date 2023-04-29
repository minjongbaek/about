import type { WorkExperience } from "@/types/work";

const TaskList = ({
  experiences,
  id = 0,
}: {
  experiences: WorkExperience[];
  id?: number;
}) => {
  return (
    <ul
      key={`ul-${id}`}
      className="flex flex-col gap-2 list-disc ml-4 font-light"
    >
      {experiences.map(({ id, text, children }) => {
        if (children && children.length !== 0) {
          return (
            <>
              <li key={`li-${id}`}>{text}</li>
              <TaskList id={id} experiences={children} />
            </>
          );
        } else {
          return <li key={`li-${id}`}>{text}</li>;
        }
      })}
    </ul>
  );
};

export default TaskList;
