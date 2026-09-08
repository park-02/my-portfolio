export interface ProjectItem {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  imageSrc: string;
  tags: string[];
  githubUrl: string;
  modalGithubUrl: string;
  description: string;
}

export const PROJECT_LIST: ProjectItem[] = [
  {
    id: 1,
    title: "AI 생성 멀티미디어 & 텍스트 탐지 모델",
    subtitle: "딥페이크 이미지·동영상 및 생성형 텍스트 판별 시스템",
    period: "2026.03 ~ 2026.06",
    imageSrc: "/images/ai.jpg",
    tags: ["Manifest V3", "JavaScript", "Python", "PyTorch", "FastAPI"],
    githubUrl: "https://github.com/KimIl0207/2026_Graduation_project",
    modalGithubUrl: "https://github.com/KimIl0207/2026_Graduation_project",
    description:
      "생성형 AI로 제작된 이미지, 동영상(딥페이크), 합성 텍스트의 위변조 여부를 식별하는 인공지능 탐지 시스템입니다. 시각 데이터의 아티팩트 분석과 언어 패턴 특징 추출 모델을 설계하고, 이를 검증할 수 있는 API 파이프라인을 구축했습니다.",
  },
  {
    id: 2,
    title: "넷엔드 지식관리 웹페이지",
    subtitle: "지식 관리 및 고객 문의 효율화 플랫폼",
    period: "2025.05 ~ 2025.07",
    imageSrc: "/images/netand.jpg",
    tags: ["React", "Flask"],
    githubUrl: "https://github.com/park-02/Cook_KMS_FrontEnd",
    modalGithubUrl: "https://github.com/park-02/Cook_KMS_FrontEnd",
    description:
      "고객사, 관리자, 게스트 간의 문의 및 사내 지식 공유를 처리하기 위한 지식 관리 웹서비스 개발",
  },
  {
    id: 3,
    title: "웹 크롤링 기반 질의응답 챗봇",
    subtitle: "웹 데이터 실시간 수집 및 대화형 챗봇 인터페이스 개발",
    period: "2025.03 ~ 2025.06",
    imageSrc: "/images/crawling.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Python", "FastAPI"],
    githubUrl: "https://github.com/Si-1-Han/2025ChatBot",
    modalGithubUrl: "https://github.com/Si-1-Han/2025ChatBot",
    description:
      "대상 웹사이트의 최신 데이터를 자동으로 크롤링·파싱하여 사용자 질의에 맞는 정보를 즉각 답변해 주는 대화형 챗봇 웹 서비스입니다. 실시간 데이터 파이프라인과 직관적인 챗 UI를 구축했습니다.",
  },
  {
    id: 4,
    title: "연구실 일정 관리 웹 서비스",
    subtitle: "월별 캘린더 기반 일정 CRUD 웹 애플리케이션",
    period: "2024.09 ~ 2024.12",
    imageSrc: "/images/plan.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Si-1-Han/2024Scheduler",
    modalGithubUrl: "https://github.com/Si-1-Han/2024Scheduler",
    description:
      "연구실 내부 일정을 효율적으로 공유하고 조율하기 위해 개발한 월별 캘린더 기반 웹 프로그램입니다. 일정의 등록, 수정, 삭제(CRUD) 기능과 직관적인 월별 조회 인터페이스를 구현했습니다.",
  },
  {
    id: 5,
    title: "스마트 디바이스 & IoT 학습",
    subtitle: "ESP32 기반 센서 제어 및 웹 서버 구축 실습 정리",
    period: "2024.03 ~ 2024.06",
    imageSrc: "/images/esp32.jpg",
    tags: ["Arduino", "ESP32", "Node-RED", "Firebase", "MQTT"],
    githubUrl: "https://github.com/park-02/2024-1_Smart-Devices",
    modalGithubUrl: "https://github.com/park-02/2024-1_Smart-Devices",
    description:
      "ESP32 마이크로컨트롤러를 활용한 센서(DHT11, 초음파, 토양 센서) 제어, Bluetooth/MQTT 통신, Firebase 연동 및 경량 웹 서버 구축 등 스마트 디바이스 전반의 주차별 실습 내용을 정리한 기술 아카이브",
  },
];
