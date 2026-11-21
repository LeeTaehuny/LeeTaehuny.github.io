// opentype.js ESM 빌드 경로에 @types/opentype.js 타입을 연결한다 (src/lib/favicon.ts 참고).
declare module 'opentype.js/dist/opentype.mjs' {
  export * from 'opentype.js';
}
