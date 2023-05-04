import Section from "@/components/Base/Section";
import Experience from "@/components/Experience";
import IconLink from "@/components/IconLink";
import SkillList from "@/components/SkillList";
import TaskList from "@/components/TaskList";
import type { WorkInfo } from "@/types/work";
import type { Introduce } from "@/types/introduce";
import type { GetStaticProps } from "next";
import Head from "next/head";
import { getIntroduce, getWorkInfoByType } from "@/lib/prisma/workInfo";

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
      <Head>
        <title>백민종 | 이력서</title>
        <meta name="description" content="백민종 이력서" />
        <meta property="og:title" content="백민종" />
        <meta property="og:description" content="이력서" />
      </Head>
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
  const introduce = await getIntroduce();
  const careers = await getWorkInfoByType("career");
  const projects = await getWorkInfoByType("project");
  const activities = await getWorkInfoByType("activity");
  return {
    props: { introduce, careers, projects, activities },
    revalidate: 60,
  };
};
