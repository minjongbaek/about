import type { WorkExperience } from "@/types/work";

const TaskList = ({ experiences }: { experiences: WorkExperience[] }) => {
  return (
    <ul className={"list-disc ml-4 font-light"}>
      {experiences.map(({ id, text, children }) => {
        if (children && children.length !== 0) {
          return (
            <li key={id} className="mt-2 first:mt-0">
              {text}
              <TaskList experiences={children} />
            </li>
          );
        }
        return (
          <li key={id} className="mt-2 fist-of-type:mt-0">
            {text}
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
