import { BioLinks } from "./components/BioLinks";
import { CertificationCard } from "./components/CertificationCard";
import { EducationCard } from "./components/EducationCard";
import { ExperienceCard } from "./components/ExperienceCard";
import { PrintTitle } from "./components/PrintTitle";
import { Section } from "./components/Section";

const Resume = async () => {
  const workExperienceWithContent = (
    await Promise.all(
      [...WORK_EXPERIENCE].map(async (experience) => {
        const { default: WorkExperienceContent } = await import(
          `@/content/work-experience/${experience.id}.mdx`
        );
        return { ...experience, WorkExperienceContent };
      }),
    )
  ).reverse();

  const sideProjectsWithContent = (
    await Promise.all(
      [...SIDE_PROJECTS].map(async (sideProject) => {
        const { default: SideProjectContent } = await import(
          `@/content/side-project/${sideProject.id}.mdx`
        );
        return { ...sideProject, SideProjectContent };
      }),
    )
  ).reverse();

  const educations = [...EDUCATION].reverse();
  const certifications = [...Certifications].reverse();

  return (
    <div className="my-12 flex flex-col gap-8 p-4 print:my-0 print:gap-5 print:p-0">
      <PrintTitle title="백민종_Frontend_Engineer" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <h1 className="leading-10">
            안녕하세요,
            <br />
            프론트엔드 개발자 <span className="font-bold">백민종</span>
            입니다.
          </h1>
          <BioLinks links={BIO} />
        </div>
        <div className="flex flex-col gap-2">
          <p>
            풀스택으로 시작해 사용자 경험을 직접 다루는 프론트엔드에
            집중해왔습니다. 지난 5년간 SaaS 플랫폼, 사내 협업 도구, 컨퍼런스
            서비스 등 다양한 B2B/B2C 프로덕트를 담당했습니다.
          </p>
          <p>
            레거시 프로젝트를 인수받아 개선하는 데 강점이 있으며, 번들 크기 75%
            절감, 빌드 시간 60% 단축 등 측정 가능한 성과를 만들어 왔습니다. 통합
            계정 시스템이나 QR 기반 입장 시스템 등 새로운 서비스를 설계하고
            구축한 경험도 있습니다.
          </p>
          <p>
            모니터링 데이터를 기반으로 기획자, 백엔드 개발자와 협업하며 사용자
            경험과 개발자 경험을 함께 개선합니다.
          </p>
        </div>
      </div>

      <Section title="경력">
        <div className="flex flex-col divide-y divide-gray-200/80">
          {workExperienceWithContent.map(
            ({
              id,
              title,
              position,
              startDate,
              endDate,
              WorkExperienceContent,
            }) => (
              <ExperienceCard
                key={id}
                title={title}
                position={position}
                startDate={startDate}
                endDate={endDate}
                imagePath={`/experience/${id}/logo.png`}
                type="WORK_EXPERIENCE"
              >
                <WorkExperienceContent />
              </ExperienceCard>
            ),
          )}
        </div>
      </Section>

      <Section title="사이드 프로젝트">
        <div className="flex flex-col divide-y divide-gray-200/80">
          {sideProjectsWithContent.map(
            ({ id, title, startDate, endDate, SideProjectContent }) => (
              <ExperienceCard
                key={id}
                title={title}
                startDate={startDate}
                endDate={endDate}
                imagePath={`/project/${id}.png`}
                type="SIDE_PROJECT"
              >
                <SideProjectContent />
              </ExperienceCard>
            ),
          )}
        </div>
      </Section>

      <div className="flex break-inside-avoid flex-col gap-20 sm:flex-row sm:gap-12 [&>*]:flex-1">
        <Section title="교육">
          <div className="flex flex-col gap-8">
            {educations.map(
              ({ id, title, major, degree, status, startDate, endDate }) => (
                <EducationCard
                  key={id}
                  title={title}
                  major={major}
                  degree={degree}
                  status={status}
                  startDate={startDate}
                  endDate={endDate}
                />
              ),
            )}
          </div>
        </Section>

        <Section title="자격증">
          <div className="flex flex-col gap-8">
            {certifications.map(({ id, title, date, issuer }) => (
              <CertificationCard
                key={id}
                title={title}
                date={date}
                issuer={issuer}
              />
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Resume;

const BIO = [
  {
    label: "GitHub",
    href: "https://github.com/minjongbaek",
  },
  {
    label: "Blog",
    href: "https://blog.minjong.dev",
  },
  {
    label: "Email",
    href: "mailto:minjongbaek@gmail.com",
  },
];

const WORK_EXPERIENCE = [
  {
    id: "knowck",
    title: "노크",
    position: "풀스택 개발자",
    startDate: "2019.12",
    endDate: "2022.07",
  },
  {
    id: "futurewiz",
    title: "퓨쳐위즈",
    position: "프론트엔드 개발자",
    startDate: "2023.08",
    endDate: "2025.06",
  },
  {
    id: "bemyfriends",
    title: "비마이프렌즈",
    position: "프론트엔드 개발자",
    startDate: "2025.06",
  },
];

const SIDE_PROJECTS = [
  {
    id: "blog",
    title: "Blog.minjong",
    startDate: "2023.01",
  },
  {
    id: "dadok",
    title: "다독다독",
    startDate: "2023.02",
    endDate: "2023.05",
  },
  {
    id: "shawkee",
    title: "Shawkee OS",
    startDate: "2023.12",
    endDate: "2024.06",
  },
];

const EDUCATION = [
  {
    id: 0,
    title: "동양미래대학교",
    major: "정보통신공학과",
    degree: "전문학사",
    status: "졸업",
    startDate: "2014.03",
    endDate: "2019.02",
  },
  {
    id: 1,
    title: "동양미래대학교",
    major: "정보통신공학과 (전공심화)",
    degree: "학사",
    status: "졸업",
    startDate: "2019.03",
    endDate: "2020.02",
  },
  {
    id: 2,
    title: "프로그래머스 프론트엔드 데브코스 3기",
    status: "수료",
    startDate: "2022.10",
    endDate: "2023.03",
  },
];

const Certifications = [
  {
    id: 0,
    title: "정보처리기사",
    date: "2019.11",
    issuer: "한국산업인력공단",
  },
];
