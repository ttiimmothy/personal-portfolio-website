import { NextResponse } from "next/server";
import { getPostMetadata } from "@/components/posts/postMetadata";

export function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const language = new URL(request.url).searchParams.get("lang") === "zh-Hant"
    ? "zh-Hant"
    : "en";

  return params
    .then(({ slug }) => NextResponse.json(getPostMetadata(slug, language)))
    .catch(() => NextResponse.json({ error: "Post not found" }, { status: 404 }));
}
