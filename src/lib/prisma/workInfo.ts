import type { WorkInfo } from "@/types/work";
import prisma from "./core";

export const getWorkInfoByType = async (type: WorkInfo["type"]) => {
  return await prisma.workInfo.findMany({
    where: {
      type,
    },
    orderBy: {
      startDate: "desc",
    },
    include: {
      links: true,
      experiences: {
        include: {
          children: true,
        },
        where: {
          parentId: null,
        },
      },
      skills: {
        include: {
          skill: true,
        },
      },
    },
  });
};

export const getIntroduce = async () => await prisma.introduce.findFirst();
