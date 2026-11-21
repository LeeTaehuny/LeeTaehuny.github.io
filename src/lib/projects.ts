import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/**
 * 회사 프로젝트 보안 규칙 보호 장치.
 * 코드 블록(``` / ~~~ 펜스, <pre>, <code> 태그)을 찾는다. 인라인 코드(`...`)는 허용한다.
 */
const CODE_BLOCK_PATTERN = /^\s*(```|~~~)|<\s*(pre|code)[\s>/]/im;

function assertNoCodeInCompanyProject(project: Project) {
  if (project.data.type !== 'company') return;

  const match = project.body?.match(CODE_BLOCK_PATTERN);
  if (match) {
    throw new Error(
      `[보안 규칙 위반] 회사 프로젝트 "${project.id}"에 코드 블록이 있습니다 (${match[0].trim()}). ` +
        '회사 프로젝트에는 코드를 넣지 않습니다. CLAUDE.md의 회사 프로젝트 보안 규칙을 확인하세요.',
    );
  }
}

/** 모든 프로젝트를 order 오름차순으로 반환한다. 보안 규칙을 어긴 파일이 있으면 빌드를 중단한다. */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  projects.forEach(assertNoCodeInCompanyProject);
  return projects.sort((a, b) => a.data.order - b.data.order);
}
