export interface Profile {
  name: string;
  role: string;
  headline: string;
  bio: string;
  githubUrl: string;
}

export const profile: Profile = {
  name: "박성현",
  role: "Frontend Developer",
  headline: "사용자 중심의 가치를 코드로 구현하는 개발자",
  bio: "React와 TypeScript를 기반으로 클린 코드와 직관적인 웹 경험을 지향합니다.",
  githubUrl: "https://github.com/park-02",
};