import Image from "next/image";
import { FC } from "react";
import { ExperienceCardProps } from "@/types";

export const ExperienceCard: FC<ExperienceCardProps> = ({
  title,
  position,
  startDate,
  endDate,
  imagePath,
  type,
  children,
}) => {
  const currentStatusText = type === "WORK_EXPERIENCE" ? "재직중" : "진행중";

  return (
    <div className="flex flex-col gap-4 py-10 first:pt-0 last:pb-0">
      <div className="flex break-after-avoid flex-row items-center gap-3">
        <div className="h-12 w-12 shrink-0 rounded-xl border border-gray-200/80 p-0.5">
          <Image
            src={imagePath}
            alt={title}
            width={120}
            height={120}
            className="rounded-lg"
          />
        </div>
        <div className="flex grow items-center gap-2">
          <h3>{title}</h3>
          {position && <span className="text-gray-500">· {position}</span>}
        </div>
        <div className="shrink-0 text-right">
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
