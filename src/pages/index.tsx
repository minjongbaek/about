import Section from "@/components/Base/Section";
import Experience from "@/components/Experience";
import IconLink from "@/components/IconLink";
import SkillList from "@/components/SkillList";
import TaskList from "@/components/TaskList";
import prisma from "@/lib/prisma";
import type { WorkInfo } from "@/types/work";
import type { Introduce } from "@/types/introduce";
import type { GetStaticProps } from "next";

interface HomeProps {
  introduce: Introduce;
  careers: WorkInfo[];
  projects: WorkInfo[];
  activities: WorkInfo[];
}

export default function Home({
  introduce,
  careers,
  projects,
  activities,
}: HomeProps) {
  return (
    <div className="max-w-3xl container mx-auto px-4 py-12 flex flex-col gap-20">
      <Section title="백민종">
        {introduce.text.split("\n").map((text, index) => (
          <p key={index}>{text}</p>
        ))}
        {introduce.github && (
          <IconLink
            type="github"
            link={`https://github.com/${introduce.github}`}
          >
            {introduce.github}
          </IconLink>
        )}
        {introduce.blog && (
          <IconLink type="rss" link={`https://${introduce.blog}`}>
            {introduce.blog}
          </IconLink>
        )}
      </Section>
      <Section title="경력">
        <div className="flex flex-col gap-12">
          {careers.map(
            ({ id, title, description, startDate, endDate, experiences }) => (
              <Experience key={id}>
                <Experience.Period startDate={startDate} endDate={endDate} />
                <Experience.Info title={title} description={description}>
                  <TaskList experiences={experiences} />
                </Experience.Info>
              </Experience>
            )
          )}
        </div>
      </Section>

      <Section title="프로젝트">
        <div className="flex flex-col gap-12">
          {projects.map(
            ({
              id,
              title,
              description,
              startDate,
              endDate,
              experiences,
              links,
              skills,
            }) => (
              <Experience key={id}>
                <Experience.Period startDate={startDate} endDate={endDate} />
                <Experience.Info title={title} description={description}>
                  {links.map(({ id, url, type, text }) => (
                    <IconLink key={id} link={url} type={type}>
                      {text}
                    </IconLink>
                  ))}
                  <TaskList experiences={experiences} />
                  <SkillList skills={skills.map(({ skill }) => skill)} />
                </Experience.Info>
              </Experience>
            )
          )}
        </div>
      </Section>

      <Section title="활동">
        <div className="flex flex-col gap-12">
          {activities.map(
            ({ id, title, description, startDate, endDate, experiences }) => (
              <Experience key={id}>
                <Experience.Period startDate={startDate} endDate={endDate} />
                <Experience.Info title={title} description={description}>
                  <TaskList experiences={experiences} />
                </Experience.Info>
              </Experience>
            )
          )}
        </div>
      </Section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const introduce = await prisma.introduce.findFirst();

  const careers = await prisma.workInfo.findMany({
    where: {
      type: "career",
    },
    orderBy: {
      startDate: "desc",
    },
    include: {
      experiences: {
        include: {
          children: true,
        },
        where: {
          parentId: null,
        },
      },
    },
  });

  const projects = await prisma.workInfo.findMany({
    where: {
      type: "project",
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

  const activities = await prisma.workInfo.findMany({
    where: {
      type: "activity",
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

  return {
    props: { introduce, careers, projects, activities },
    revalidate: 60,
  };
};
