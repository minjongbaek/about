import dayjs from "dayjs";
import type { PropsWithChildren } from "react";
import Label from "./Base/Label";

const Experience = ({ children }: PropsWithChildren) => {
  return <div className="flex gap-8">{children}</div>;
};

const ExperiencePeriod = ({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate?: string;
}) => {
  const period = `${dayjs(startDate).format("YYYY.MM")} ~ ${
    endDate ? dayjs(endDate).format("YYYY.MM") : ""
  }`;
  let month = endDate ? dayjs(endDate).diff(startDate, "month") : null;
  let year: number | null = null;

  if (month && month >= 12) {
    year = Math.floor(month / 12);
    if (month % 12 > 0) month = month % 12;
  }

  return (
    <div className="w-64">
      <p className="text-slate-500 text-xl">{period}</p>
      <p>
        {(month || year) && (
          <Label>
            {year && year + "년 "}
            {month && month + "개월"}
          </Label>
        )}
        {!endDate && <Label>진행 중</Label>}
      </p>
    </div>
  );
};

const ExperienceInfo = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
} & PropsWithChildren) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold break-keep">{title}</h2>
        {description && (
          <p className="text-base italic text-slate-400">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
};

Experience.Period = ExperiencePeriod;
Experience.Info = ExperienceInfo;

export default Experience;
