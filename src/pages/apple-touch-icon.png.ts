import type { APIRoute } from 'astro';
import { faviconPng } from '../lib/favicon';

// iOS가 모서리를 직접 둥글게 처리하므로 사각형 그대로 만든다.
export const GET: APIRoute = async () =>
  new Response(await faviconPng(180, { rounded: false }), { headers: { 'Content-Type': 'image/png' } });
