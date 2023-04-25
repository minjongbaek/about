import type { PropsWithChildren } from "react";

const Career = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col gap-16">{children}</div>;
};

const CareerInfo = ({
  title,
  period,
  position,
}: {
  title: string;
  period: string;
  position: string;
}) => {
  return (
    <div className="mt-4">
      <h3 className="text-2xl font-bold break-keep">{title}</h3>
      <div className="text-md font-bold">
        <p>{period}</p>
        <p>{position}</p>
      </div>
    </div>
  );
};

Career.Info = CareerInfo;

export default Career;
