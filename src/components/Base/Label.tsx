import type { PropsWithChildren } from "react";

const Label = ({ children }: PropsWithChildren) => {
  return (
    <span
      className={`text-xs px-1 py-0.5 rounded bg-white text-blue-500 border border-blue-500 font-medium`}
    >
      {children}
    </span>
  );
};

export default Label;
