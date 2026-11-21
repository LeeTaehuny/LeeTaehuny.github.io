# 포트폴리오 사이트

Unreal Engine C++ 개발자의 이직용 포트폴리오 사이트.
채용 담당자가 개발 역량과 문제 해결 능력을 빠르게 파악하는 것이 목표.

- 언어: 한국어만
- 범위: 포트폴리오만 (블로그 없음)
- 구성: 메인 페이지 1개 + 프로젝트별 상세 페이지

## 기술 스택

- Astro + TypeScript (strict)
- Tailwind CSS (Astro 공식 통합 방식으로 설치)
- 배포: GitHub Pages, `withastro/action` 기반 GitHub Actions
- site: `https://<아이디>.github.io` (base 설정 없음)

## 폴더 구조

```
src/
  content/projects/     # 프로젝트별 .mdx
  content.config.ts     # 컬렉션 스키마
  pages/
    index.astro
    projects/[slug].astro
  components/
  layouts/
public/media/           # 이미지, GIF, 영상 썸네일, resume.pdf
```

## 콘텐츠 규칙

### 프로젝트 종류

프로젝트는 `type: company | personal` 두 종류이며, 상세 페이지 템플릿이 다르다.

- **company**: Overview, Project Info, My Role, 사용 기술
- **personal**: Overview, Project Info, My Role, Architecture, Implementation,
  Challenges & Solutions, Results, Retrospective

### frontmatter 스키마

`title, type, summary, period, team, role, stack[], featured, thumbnail, order, links?`

- `order`: number. 작은 숫자가 먼저 나온다 (목록 정렬 기준)
- `links`: 선택. `{ github?: string, video?: string }`

### 회사 프로젝트 보안 규칙 (반드시 지킬 것)

- 회사 홈페이지에 이미 공개된 대표 이미지와 작업 내용 설명만 사용한다.
- 코드, 클래스 구조도, 시스템 설계도, 내부 스크린샷, 통신 명세는 넣지 않는다.
- 기술적 내용은 "어떤 문제를 어떤 방식으로 접근했는지"를 일반적인 말로만 서술한다.
- 판단이 애매하면 작성하지 말고 나에게 먼저 묻는다.

## 디자인 규칙

- 깔끔하고 한눈에 들어오는 레이아웃
- 라이트 모드만 (다크 모드 구현하지 않음)
- 모바일 반응형
- 색, 폰트, 간격은 Tailwind 테마에 정의해 두고 그것만 사용
- 기술 스택에 숙련도 바(%)를 쓰지 않는다. 대신 사용한 프로젝트를 태그로 연결
- 외부 이미지 링크 금지, 미디어는 `public/media`에 둔다

## 작업 방식

- 여러 파일에 걸친 변경이나 구조 변경 전에는 계획을 먼저 보여주고 승인을 받는다.
- 한 번에 한 단계씩 진행한다.
- 커밋 전에 `npm run build`가 성공하는지 확인한다.
- 단계가 끝나면 커밋까지 한다. push는 하지 않는다.
- 커밋 메시지는 한국어로, 무엇을 바꿨는지 한 줄로 쓴다.

## 진행 단계

1. Astro 초기화 + Tailwind + 배포 파이프라인
2. 콘텐츠 컬렉션 스키마 + 더미 프로젝트 (company 1, personal 1)
3. 메인 페이지 레이아웃
4. 프로젝트 상세 페이지 템플릿 (company / personal)
5. 실제 콘텐츠 입력
