export interface RichTextSegment {
  text: string;
  bold: boolean;
}

/**
 * `**굵게**` 표기가 섞인 문자열을 조각으로 나눈다.
 * HTML로 변환하지 않고 조각만 돌려주므로, 렌더링 쪽에서 set:html 없이 안전하게 출력할 수 있다.
 * 짝이 맞지 않는 `**`는 일반 글자로 남는다.
 */
export function parseBold(source: string): RichTextSegment[] {
  const segments: RichTextSegment[] = [];
  const pattern = /\*\*(.+?)\*\*/g;
  let last = 0;

  for (const match of source.matchAll(pattern)) {
    const start = match.index;
    if (start > last) segments.push({ text: source.slice(last, start), bold: false });
    segments.push({ text: match[1], bold: true });
    last = start + match[0].length;
  }

  if (last < source.length) segments.push({ text: source.slice(last), bold: false });
  return segments;
}
