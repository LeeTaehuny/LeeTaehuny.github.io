import type { APIRoute } from 'astro';
import { faviconPng } from '../lib/favicon';

export const GET: APIRoute = async () =>
  new Response(await faviconPng(32), { headers: { 'Content-Type': 'image/png' } });
