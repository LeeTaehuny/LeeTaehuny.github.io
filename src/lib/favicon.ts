/**
 * favicon 생성기 (빌드 시 실행).
 * profile.ts 이름의 첫 글자를 Pretendard Bold 글리프 '경로'로 그린다.
 * 폰트를 텍스트가 아닌 path로 넣기 때문에 한글 폰트가 없는 CI 환경에서도 똑같이 렌더링된다.
 * 색은 global.css의 @theme 토큰에서 읽어 와 테마와 항상 일치한다.
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
// opentype.js 2.x는 package.json에 exports가 없어 패키지 이름으로 import하면 Node가 CJS(UMD) 빌드를 불러와
// named export를 찾지 못한다. ESM 빌드를 직접 import한다 (타입은 src/types/opentype.d.ts).
import { parse } from 'opentype.js/dist/opentype.mjs';
import sharp from 'sharp';
import { profile } from '../data/profile';

const VIEWBOX = 512;
const FONT_FILE = 'node_modules/pretendard/dist/public/static/Pretendard-Bold.otf';
const THEME_FILE = 'src/styles/global.css';

function readThemeColor(name: string): string {
  const css = readFileSync(resolve(THEME_FILE), 'utf8');
  const match = css.match(new RegExp(`--color-${name}:\\s*([^;]+);`));
  if (!match) throw new Error(`[favicon] ${THEME_FILE}에서 --color-${name} 토큰을 찾을 수 없습니다.`);
  return match[1].trim();
}

function initialGlyphPath(): string {
  const file = readFileSync(resolve(FONT_FILE));
  const font = parse(file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength));

  const initial = Array.from(profile.name.trim())[0] ?? '?';
  const fontSize = VIEWBOX * 0.6;

  // 원점에서 한 번 그려 실제 글리프 크기를 잰 뒤, 정중앙에 오도록 다시 그린다.
  const box = font.getPath(initial, 0, 0, fontSize).getBoundingBox();
  const x = (VIEWBOX - (box.x2 - box.x1)) / 2 - box.x1;
  const y = (VIEWBOX - (box.y2 - box.y1)) / 2 - box.y1;

  return font.getPath(initial, x, y, fontSize).toPathData(2);
}

interface FaviconOptions {
  /** false면 모서리를 둥글리지 않는다. iOS가 직접 모서리를 깎는 apple-touch-icon용. */
  rounded?: boolean;
}

export function faviconSvg({ rounded = true }: FaviconOptions = {}): string {
  const radius = rounded ? VIEWBOX * 0.22 : 0;
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${VIEWBOX} ${VIEWBOX}">`,
    `<rect width="${VIEWBOX}" height="${VIEWBOX}" rx="${radius}" fill="${readThemeColor('accent')}"/>`,
    `<path d="${initialGlyphPath()}" fill="${readThemeColor('white')}"/>`,
    `</svg>`,
  ].join('');
}

export async function faviconPng(size: number, options?: FaviconOptions): Promise<Uint8Array<ArrayBuffer>> {
  const png = await sharp(Buffer.from(faviconSvg(options))).resize(size, size).png().toBuffer();
  return Uint8Array.from(png);
}
