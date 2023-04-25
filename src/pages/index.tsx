import Career from "@/components/Career";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="max-w-3xl container mx-auto pt-4 flex flex-col">
      <div className="flex flex-col gap-3 py-3">
        <h1 className="text-4xl font-bold pl-2 border-l-8 border-blue-500">
          백민종
        </h1>
        <p>개발자 경험을 중요하게 생각하는 프론트엔드 개발자 백민종입니다.</p>
        <p>
          좋은 개발자 경험은 사용자에게 더 좋은 경험을 제공하는 것으로
          이어진다고 생각합니다. 더 좋은 결과물을 만들기 위해 팀원들이
          효율적으로 작업할 수 있는 방법과 개발 과정에서 발생할 수 있는 문제를
          최소화할 수 있는 방법을 찾는 것을 좋아합니다.
        </p>
      </div>

      <div className="flex flex-col gap-3 py-3">
        <h2 className="text-3xl font-bold pl-2 border-l-8 border-blue-500">
          경력
        </h2>
        <Career>
          <Career.Info
            title="노크"
            period="2019.12 ~ 2022.07 (2년 8개월)"
            position="시스탬 개발부 / 선임 연구원"
          />
          <Experience>
            <Experience.Info
              title="차용증 서비스 유지보수"
              period="2020.07 ~ 2020.09 (3개월)"
            />
            <Experience.Detail
              skill="Vue.js, Vuex"
              experiences={[
                "페이지를 이동할 때 마다 화면이 깜빡이는 문제를 해결하기 위해 jQuery로 작성된 코드를 Vue.js로 마이그레이션",
                "웹뷰와 앱 간 메시지 전달을 위한 인터페이스 정의",
              ]}
            />
          </Experience>
          <Experience>
            <Experience.Info
              title="슬기로운 아파트생활 개발"
              period="2020.09 ~ 2020.12 (4개월)"
            />
            <Experience.Detail
              skill="Flask, MariaDB"
              experiences={[
                "Swagger를 도입하여 엑셀로 관리되던 API 문서를 자동화",
              ]}
            />
          </Experience>
          <Experience>
            <Experience.Info
              title="증강현실 인터페이스 정부과제 수행"
              period="2021.01 ~ 2021.12 (1년)"
            />
            <Experience.Detail
              skill="FastAPI, MariaDB, OpenCV-Python"
              experiences={[
                "OpenCV를 활용하여 사용자가 촬영한 화상에서 특정 마커를 검출하는 로직 구현",
                "과제의 목표치인 이미지 압축률 50% 이상, 3초 내 마커 검출, 성공률 90%를 달성",
              ]}
            />
          </Experience>
          <Experience>
            <Experience.Info title="팀 생산성 향상에 기여" />
            <Experience.Detail
              experiences={[
                "월간 리포트를 엑셀로 만들고 메일로 보내는 반복적인 업무를 배치 프로그램을 만들어 자동화",
                "업무 외 시간 발생하는 서비스 장애에 신속하게 대응하기 위해 slack 알림으로 서버 상태를 모니터링 하여 월별 서비스 장애 문의 60% 이상 감소",
              ]}
            />
          </Experience>
        </Career>
      </div>
    </div>
  );
}
