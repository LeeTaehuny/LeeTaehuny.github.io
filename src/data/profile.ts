/**
 * 개인 정보와 경력 데이터.
 * 현재는 모두 더미 값이며, 실제 내용은 이 파일만 수정하면 된다.
 */

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  about: string[];
  email: string;
  github: string;
  resume: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  tasks: string[];
}

export interface TechCategory {
  category: string;
  /** 기술 이름은 프로젝트 frontmatter의 stack 값과 정확히 같아야 프로젝트 태그가 연결된다. */
  items: string[];
}

export const profile: Profile = {
  name: '홍길동',
  role: 'Unreal Engine C++ 개발자',
  tagline: '[더미] 게임플레이와 네트워크 시스템을 설계하고, 문제의 원인을 끝까지 파고드는 개발자입니다.',
  about: [
    '[더미] Unreal Engine과 C++로 모바일·PC 게임 클라이언트를 개발해 왔습니다.',
    '[더미] 전투 시스템, 네트워크 동기화, 성능 최적화를 주로 담당했고, 기획자와 아티스트가 편하게 작업할 수 있는 도구를 만드는 일에도 관심이 많습니다.',
  ],
  email: 'hello@example.com',
  github: 'https://github.com/example',
  resume: '/media/resume.pdf',
};

export const experiences: Experience[] = [
  {
    company: '[더미] 예시 스튜디오',
    position: '클라이언트 프로그래머',
    period: '2023.03 – 현재',
    tasks: [
      '모바일 액션 RPG 전투 시스템 개발',
      '대규모 전투 구간 프레임 최적화',
      '기획자용 전투 수치 조정 에디터 도구 제작',
    ],
  },
  {
    company: '[더미] 샘플 게임즈',
    position: '주니어 게임 프로그래머',
    period: '2021.01 – 2023.02',
    tasks: ['PC 온라인 게임 UI 및 인게임 콘텐츠 개발', '빌드 자동화 스크립트 유지보수'],
  },
];

export const techStack: TechCategory[] = [
  { category: '엔진', items: ['Unreal Engine 5', 'Unreal Engine 4'] },
  { category: '언어', items: ['C++', 'C#', 'Python'] },
  {
    category: '게임플레이 · 네트워크',
    items: ['Gameplay Ability System', 'Replication', 'Enhanced Input', 'Blueprint'],
  },
  { category: '도구', items: ['Git', 'Perforce', 'Visual Studio', 'Rider'] },
];
