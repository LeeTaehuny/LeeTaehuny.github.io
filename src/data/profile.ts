/**
 * 개인 정보와 경력 데이터.
 * 사이트에 표시되는 개인 정보는 이 파일만 수정하면 된다.
 */

export interface Profile {
  name: string;
  /** 영문 이름. 현재 화면에는 표시하지 않는다. */
  nameEn: string;
  role: string;
  tagline: string;
  /** 문단 목록. 문장 안의 `**굵게**` 표기는 굵은 글씨로 렌더링된다. */
  about: string[];
  email: string;
  github: string;
  resume: string;
}

export interface ExperienceTask {
  /** 굵게 표시되는 항목 제목 */
  title: string;
  detail: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  tasks: ExperienceTask[];
}

export interface TechCategory {
  category: string;
  /** 기술 이름은 프로젝트 frontmatter의 stack 값과 정확히 같아야 프로젝트 태그가 연결된다. */
  items: string[];
  /** 학습 중인 그룹이면 true. 다른 그룹과 살짝 구분되게 표시된다. */
  learning?: boolean;
}

export const profile: Profile = {
  name: '이태현',
  nameEn: 'LeeTaehyun',
  role: 'Unreal Engine 클라이언트 프로그래머',
  tagline:
    'Unreal Engine C++와 Dedicated Server 환경에서 게임플레이 및 네트워크 시스템을 개발해 온 클라이언트 프로그래머입니다.',
  about: [
    'Unreal Engine 5와 C++를 활용하여 실시간 3D 시뮬레이션 및 멀티플레이어 시스템을 개발하고 있습니다.',
    '객체의 이동, 전투, 상태 관리 등 게임플레이 로직을 구현하고 있으며, Dedicated Server 기반의 서버-클라이언트 구조에서 Replication과 RPC를 활용한 네트워크 동기화를 중점적으로 담당하고 있습니다.',
    '또한 TCP/UDP 소켓 통신과 DIS 프로토콜을 활용한 외부 시스템 연동을 통해 실시간 분산 시뮬레이션 환경을 구축하는 데 기여하고 있습니다.',
  ],
  email: 'apth1023@naver.com',
  github: 'https://github.com/LeeTaehuny',
  resume: '/media/resume.pdf',
};

export const experiences: Experience[] = [
  {
    company: '심네트',
    position: 'Unreal Engine 클라이언트 프로그래머',
    period: '2024.11 – 현재',
    tasks: [
      {
        title: '게임플레이 및 클라이언트 시스템 개발',
        detail:
          'Unreal Engine 5·C++ 기반 훈련 진행 및 제어 로직, 객체 이동·전투·상태 관리, 시나리오 로딩, 레벨 전환 및 UI 기능 구현',
      },
      {
        title: '멀티플레이어 네트워크 개발',
        detail:
          'Dedicated Server 환경에서 Replication·RPC 기반 서버-클라이언트 상태 동기화 구현 및 멀티클라이언트 동작 검증',
      },
      {
        title: '외부 시스템 연동',
        detail:
          'TCP/UDP 기반 비동기 소켓 통신 및 DIS 프로토콜을 활용한 실시간 시뮬레이션 데이터 송수신 및 외부 시스템 연동',
      },
    ],
  },
];

export const techStack: TechCategory[] = [
  { category: 'Language', items: ['C++'] },
  { category: 'Tools', items: ['Unreal Engine 5', 'Git', 'Visual Studio'] },
  {
    category: 'Learning',
    items: ['AI Harness Engineering (Claude Code)', 'Unity / C#'],
    learning: true,
  },
];
