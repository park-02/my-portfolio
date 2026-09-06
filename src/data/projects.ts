export interface ProjectItem {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  imageSrc: string;
  tags: string[];
  category: '대표' | 'Frontend' | 'Backend';
  githubUrl: string;
  modalGithubUrl: string;
  description: string;
}

export const PROJECT_LIST: ProjectItem[] = [
  {
    id: 1,
    title: '넷엔드 지식관리 웹페이지',
    subtitle: '지식 관리 및 고객 문의 효율화 플랫폼',
    period: '2025.05 ~ 2025.07',
    imageSrc: '/images/OIP.jpg',
    tags: ['React', 'Flask'],
    category: '대표',
    githubUrl: 'https://github.com/park-02/my-portfolio',
    modalGithubUrl: 'https://github.com/park-02/Cook_KMS_FrontEnd',
    description: '고객사, 관리자, 게스트 간의 문의 및 사내 지식 공유를 처리하기 위한 지식 관리 웹서비스 개발',
  },
  {
    id: 2,
    title: '넷엔드 지식관리 웹페이지',
    subtitle: '지식 관리 및 고객 문의 효율화 플랫폼',
    period: '2025.05 ~ 2025.07',
    imageSrc: '/images/OIP.jpg',
    tags: ['React', 'Flask'],
    category: '대표',
    githubUrl: 'https://github.com/park-02/my-portfolio',
    modalGithubUrl: 'https://github.com/park-02/Cook_KMS_FrontEnd',
    description: '고객사, 관리자, 게스트 간의 문의 및 사내 지식 공유를 처리하기 위한 지식 관리 웹서비스 개발',
  },
  {
    id: 3,
    title: '넷엔드 지식관리 웹페이지',
    subtitle: '지식 관리 및 고객 문의 효율화 플랫폼',
    period: '2025.05 ~ 2025.07',
    imageSrc: '/images/OIP.jpg',
    tags: ['React', 'Flask'],
    category: '대표',
    githubUrl: 'https://github.com/park-02/my-portfolio',
    modalGithubUrl: 'https://github.com/park-02/Cook_KMS_FrontEnd',
    description: '고객사, 관리자, 게스트 간의 문의 및 사내 지식 공유를 처리하기 위한 지식 관리 웹서비스 개발',
  }
];