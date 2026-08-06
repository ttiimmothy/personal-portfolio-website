import { NextResponse } from "next/server";
import { getPostNavigation } from "@/components/posts/postMetadata";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const language = new URL(request.url).searchParams.get("lang") === "zh-Hant"
    ? "zh-Hant"
    : "en";
  return NextResponse.json(getPostNavigation(slug, language));
}
