import { FC } from "react";
import { SectionProps } from "@/types";

export const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <div>
      <h2 className="mb-4 break-after-avoid">{title}</h2>
      <hr className="mt-4 mb-4 break-after-avoid border-gray-300" />
      {children}
    </div>
  );
};
