import { PropsWithChildren } from "react";

interface SectionProps {
  title: string;
}

export const Section = ({
  title,
  children,
}: PropsWithChildren<SectionProps>) => {
  return (
    <div>
      <h2 className="mb-4 break-after-avoid">{title}</h2>
      <hr className="mt-4 mb-4 break-after-avoid border-gray-300" />
      {children}
    </div>
  );
};
