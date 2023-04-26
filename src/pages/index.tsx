import Section from "@/components/Base/Section";
import Experience from "@/components/Experience";
import IconLink from "@/components/IconLink";
import SkillList from "@/components/SkillList";
import TaskList from "@/components/TaskList";

export default function Home() {
  return (
    <div className="max-w-3xl container mx-auto px-4 py-12 flex flex-col gap-20">
      <Section title="백민종">
        <p>
          좋은 개발자 경험은 사용자에게 더 좋은 경험을 제공하는 것으로
          이어진다고 생각합니다. 더 좋은 결과물을 만들기 위해 팀원들이
          효율적으로 작업할 수 있는 방법과 개발 과정에서 발생할 수 있는 문제를
          최소화할 수 있는 방법을 찾는 것을 좋아합니다.
        </p>
        <p>
          현재는 브라우저와 프론트엔드 기술의 발전으로 인해 웹이 다양한 것을 할
          수 있다는 것에 크게 흥미를 느끼고 프론트엔드 개발자로 커리어를 전환
          중입니다.
        </p>
        <IconLink type="github" link="https://github.com/minjongbaek">
          minjongbaek
        </IconLink>
        <IconLink type="rss" link="https://blog.minjongdev.com">
          blog.minjongdev.com
        </IconLink>
      </Section>
      <Section title="경력">
        <div className="flex flex-col gap-12">
          <Experience>
            <Experience.Period startDate="2019.12.02" endDate="2022.07.14" />
            <Experience.Info
              title="노크"
              description="시스템 개발부 / 선임 연구원"
            >
              <TaskList
                experiences={[
                  "Python / Flask, FastAPI를 이용한 백엔드 개발 경험",
                  "GCP 기반의 클라우드 서비스 운영 경험",
                  "월간 리포트를 엑셀로 만들고 메일로 보내는 반복적인 업무를 배치 프로그램을 개발하여 자동화",
                  "업무 외 시간 발생하는 서비스 장애에 신속하게 대응하기 위해 slack 알림으로 서버 상태를 모니터링하여 월별 서비스 장애 문의 60% 이상 감소",
                ]}
              />
            </Experience.Info>
          </Experience>
        </div>
      </Section>

      <Section title="프로젝트">
        <div className="flex flex-col gap-12">
          <Experience>
            <Experience.Period startDate="2023.02.01" />
            <Experience.Info
              title="다독다독"
              description="책에 대한 인사이트를 공유하고 소통하는 독서 소셜 플랫폼"
            >
              <IconLink
                type="github"
                link="https://github.com/prgrms-web-devcourse/Team-Gaerval-Dadok-FE"
              >
                Team-Gaerval-Dadok-FE
              </IconLink>
              <IconLink link="https://dadok.vercel.app">
                dev.dadok.site
              </IconLink>
              <TaskList
                experiences={[
                  "Suspense와 ErrorBoundary를 이용해 상태에 따른 UI를 선언적으로 렌더링하도록 구현",
                  "Presentational & Container 패턴을 적용하여 일부 컴포넌트의 재사용성과 유지 보수성 향상",
                  "책 표지에서 가장 많이 사용 되는 색상을 추출하여 책등 렌더링",
                ]}
              />
              <SkillList
                skills={[
                  "TypeScript",
                  "Next.js",
                  "React",
                  "TanStack Query",
                  "Chakra UI",
                ]}
              />
            </Experience.Info>
          </Experience>

          <hr />

          <Experience>
            <Experience.Period startDate="2023.01.01" endDate="2023.03.01" />

            <Experience.Info
              title="디그디그딥"
              description="커뮤니케이션을 통한 학습을 제공하는 개발자 전용 SNS"
            >
              <IconLink
                type="github"
                link="https://github.com/prgrms-fe-devcourse/FEDC3_DigDigDeep_Yuri"
              >
                FEDC3_DigDigDeep_Yuri
              </IconLink>
              <IconLink link="https://dig-dig-deep.vercel.app">
                dig-dig-deep.vercel.app
              </IconLink>
              <TaskList
                experiences={[
                  "지속적으로 성능을 개선하여 1차 배포시 90점이던 LightHouse Performance를 100점으로 향상",
                  [
                    "Lazy-loading을 적용하여 사용자에게 필요한 콘텐츠만 빠르게 전달할 수 있도록 개선",
                    "woff2 폰트에 서브셋 폰트를 적용하여 폰트 파일의 크기를 약 300KB → 12KB 로 감소",
                  ],
                  "github actions을 이용하여 배포 자동화",
                ]}
              />
              <SkillList
                skills={["TypeScript", "React", "Recoil", "Styled-Components"]}
              />
            </Experience.Info>
          </Experience>

          <hr />

          <Experience>
            <Experience.Period startDate="2023.01.01" />
            <Experience.Info
              title="Blog.minjongdev"
              description="기록을 남기기 위한 개발 블로그"
            >
              <IconLink
                type="github"
                link="https://github.com/minjongbaek/Blog.minjongdev"
              >
                Blog.minjongdev
              </IconLink>
              <IconLink link="https://blog.minjongdev.com">
                blog.minjongdev.com
              </IconLink>
              <TaskList
                experiences={[
                  "빠른 배포와 개발 속도를 위해 웹 개발에 필요한 복잡성을 최소화하고 다른 라이브러리나 프레임워크에 구애받지 않는 Astro 프레임워크를 도입",
                  ["Gatsby 프레임워크 대비 배포시간이 약 110초 → 15초로 단축"],
                  "이미지를 리사이징하고 avif, webp 포맷으로 대체하여 이미지 payload를 909KB → 29KB로 감소",
                ]}
              />
              <SkillList
                skills={["TypeScript", "Astro", "React", "Tailwind CSS"]}
              />
            </Experience.Info>
          </Experience>

          <hr />

          <Experience>
            <Experience.Period startDate="2023.11.01" endDate="2023.12.01" />
            <Experience.Info
              title="Vanilla Notion"
              description="Vanllia JS로 노션을 클로닝한 미니 프로젝트"
            >
              <IconLink
                type="github"
                link="https://github.com/minjongbaek/vanilla-notion"
              >
                Vanilla Notion
              </IconLink>
              <IconLink link="https://vanilla-notion.minjongdev.com">
                vanilla-notion.minjongdev.com
              </IconLink>
              <TaskList
                experiences={[
                  "state가 변경되는 경우에만 UI가 업데이트 되도록 구현",
                  "history API를 이용하여 새로 로드하지 않고 페이지 이동이 가능하도록 구현",
                ]}
              />
              <SkillList skills={["JavaScript"]} />
            </Experience.Info>
          </Experience>

          <hr />

          <Experience>
            <Experience.Period startDate="2021.01.01" endDate="2022.01.01" />
            <Experience.Info title="증강현실 인터페이스 정부과제 수행">
              <TaskList
                experiences={[
                  "OpenCV를 활용하여 사용자가 촬영한 화상에서 특정 마커를 검출하는 로직 구현",
                  "과제의 목표치인 이미지 압축률 50% 이상, 3초 내 마커 검출, 성공률 90%를 달성",
                ]}
              />
              <SkillList
                skills={["Python", "FastAPI", "MariaDB", "OpenCV-Python"]}
              />
            </Experience.Info>
          </Experience>

          <hr />

          <Experience>
            <Experience.Period startDate="2020.09.01" endDate="2021.01.01" />
            <Experience.Info
              title="슬기로운 아파트 생활 개발"
              description="아파트 입주민을 위한 커뮤니티"
            >
              <IconLink link="http://wiselife.co.kr">wiselife.co.kr</IconLink>
              <TaskList
                experiences={[
                  "Swagger를 도입하여 엑셀로 관리되던 API 문서를 자동화",
                ]}
              />
              <SkillList skills={["Python", "Flask", "MariaDB"]} />
            </Experience.Info>
          </Experience>

          <hr />

          <Experience>
            <Experience.Period startDate="2020.07.01" endDate="2020.10.01" />
            <Experience.Info
              title="김변호사 차용증 유지보수"
              description="차용증을 모바일로 간편하게 작성하고 서명하는 서비스"
            >
              <IconLink link="https://play.google.com/store/apps/details?id=com.lawpang.client">
                Google Play Link
              </IconLink>
              <TaskList
                experiences={[
                  "페이지를 이동할 때 마다 화면이 깜빡이는 문제를 해결하기 위해 jQuery로 작성된 코드를 Vue.js로 마이그레이션",
                  "웹뷰와 앱 간 메시지 전달을 위한 인터페이스 정의",
                ]}
              />
              <SkillList skills={["JavaScript", "Vue.js", "Vuex"]} />
            </Experience.Info>
          </Experience>
        </div>
      </Section>

      <Section title="활동">
        <Experience>
          <Experience.Period startDate="2022.10.01" endDate="2023.03.01" />
          <Experience.Info title="프로그래머스 데브코스 3기">
            <TaskList
              experiences={[
                "팀 프로젝트와 코드 리뷰를 통한 커뮤니케이션 기반 학습 경험",
                "도서 스터디와 CS 스터디를 통해 CS 지식을 습득하고 공유",
              ]}
            />
          </Experience.Info>
        </Experience>
      </Section>
    </div>
  );
}
