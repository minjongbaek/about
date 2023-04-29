import { Link } from "./link";
import { Skill } from "./skill";

export interface WorkInfo {
  id: number;
  title: string;
  description?: string;
  startDate: string;
  endDate?: string;
  type: "career" | "project";
  experiences: WorkExperience[];
  links: Link[];
  skills: WorksOnSkills[];
}

export interface WorkExperience {
  id: number;
  text: string;
  parentId: number;
  children?: WorkExperience[];
}

export interface WorksOnSkills {
  skill: Skill;
  skillId: number;
  workId: number;
}
