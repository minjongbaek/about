import Image from "next/image";
import { PropsWithChildren } from "react";

interface ExperienceCardProps {
  title: string;
  position?: string;
  startDate: string;
  endDate?: string;
  imagePath: string;
  type: "WORK_EXPERIENCE" | "SIDE_PROJECT";
}

export const ExperienceCard = ({
  title,
  position,
  startDate,
  endDate,
  imagePath,
  type,
  children,
}: PropsWithChildren<ExperienceCardProps>) => {
  const currentStatusText = type === "WORK_EXPERIENCE" ? "재직중" : "진행중";

  return (
    <div className="flex flex-col gap-2 py-6 first:pt-0 last:pb-0">
      <div className="flex break-after-avoid flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 shrink-0 rounded-xl border border-gray-200/80 p-0.5">
            <Image
              src={imagePath}
              alt={title}
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <div>
            <h3>{title}</h3>
            {position && <span className="text-gray-500">{position}</span>}
          </div>
        </div>
        <div className="shrink-0 sm:ml-auto sm:text-right">
          <span>
            {startDate} - {endDate ?? currentStatusText}
          </span>
          {endDate && <span> ({getDuration(startDate, endDate)})</span>}
        </div>
      </div>
      <div className="markdown">{children}</div>
    </div>
  );
};

const getDuration = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diff = end.getTime() - start.getTime();
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30),
  );

  if (years === 0) {
    return `${months}개월`;
  }
  return `${years}년 ${months}개월`;
};
