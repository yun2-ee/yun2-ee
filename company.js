const newbizlist = [
  {
    name: "페트리(Petree)",
    term: "2021.06-2021.07",
    people: 2,
    introduce:
      "페트병 재활용률을 높이기 위하여 페트병 등급을 재고 사용자가 페트병 수거 요청하면 수거해가는 앱입니다.",
    role: "프론트엔드 전담",
    doList: [
      "RESTful API를 이용한 관련 기능 구현( Axios API , GraphQL 관련 기능 사용",
      "Context API 를 사용하여 상태관리",
      "Kakao Login 관련 환경 설정 및 기능 구현",
      "Daum 우편번호 api 사용하여 우편번호 및 주소 가져오는 기능 구현",
      "구글 플레이스토어에 업데이트 버전 앱 출시",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "React Native",
    ],
    images: [
      "/images/company/petree/petree1.jpg",
      "/images/company/petree/petree2.jpg",
      "/images/company/petree/petree3.jpg",
    ],
  },
  {
    name: "음원 저작권 사이트",
    term: "2021.07-2021.08",
    people: 3,
    role: "퍼블리싱 전담",
    introduce: "음원 저작권 사이트입니다.",
    doList: [
      "적응형 웹( PC ) UI 구현",
      " 기본 구조 설계",
      "Presenter / Container 디자인 패턴 적용",
      "Redux 로 상태관리",
    ],
    skills: ["HTML", "CSS", "TypeScript", "Next.js"],
    images: [],
  },
  {
    name: "메타브(Metav)",
    term: "2021.07-2022.02",
    people: 4,
    role: "프론트엔드 전담",
    introduce: "블라블라",
    doList: [
      "모바일 반응형 웹 제작",
      "RESTFul API 를 이용한 관련 기능 구현",
      "FETCH API (GET,.PUT, DELETE, POST) 관련 기능 활용",
      "Kakao login 관련 환경 설정 및 기능 구현",
      "Google login 관련 환경 설정 및 기능 구현",
      "react-native webview 사용하여 앱과 웹 사이 통신 구현",
      "Redux 를 사용하여 상태 관리",
      "구글 시트를 사용하여 QA 진행 및 버그 수정",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "React Native",
    ],
    images: [],
  },
  {
    name: "AI 기반 음원 사이트",
    term: "2022.03-2022.03",
    people: 6,
    role: "QA 및 프론트엔드 전담",
    introduce: "블라블라",
    doList: [
      "TRELLO 사용하여 QA 진행 및 버그 수정",
      "SCROLL 동작 감지하여 무한 스크롤 게시판 구현",
      "RESTFul API (Axios)를 이용한 관련 기능 구현",
    ],
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Next.js"],
    images: [],
  },
];
const exampleLIst = [
  {
    name: "zxczzxc",
    term: "2022.02-2022.03",
    people: 3,
    introduce: "블라블라",
    skills: ["React", "javascript"],
  },
  {
    name: "zxczzxc",
    term: "2022.02-2022.03",
    people: 3,
    introduce: "블라블라",
    skills: ["React", "javascript"],
  },
];
export const companyList = [
  {
    name: "(주)뉴비즈스타트",
    projectList: newbizlist,
    period: "2021.06-2022.03",
  },
  {
    name: "(주)example",
    projectList: exampleLIst,
    period: "2021.06-2022.03",
  },
];
