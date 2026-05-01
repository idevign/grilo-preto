import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const KEY = "denver-group-tracker";

export async function GET() {
  const data = await redis.get(KEY);
  return NextResponse.json(data ?? {});
}

export async function POST(req: Request) {
  const body = await req.json();
  await redis.set(KEY, JSON.stringify(body));
  return NextResponse.json({ ok: true });
}
