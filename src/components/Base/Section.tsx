import type { PropsWithChildren } from "react";

const Section = ({
  title,
  children,
}: { title: string } & PropsWithChildren) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold pl-2 border-l-8 border-blue-500">
        {title}
      </h1>
      {children}
    </div>
  );
};

Section;

export default Section;
