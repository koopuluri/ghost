import { readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import selectedEssays from "@/content/selected-essays.json";

const expressionRoot = path.resolve(process.cwd(), "..");

export function getSelectedEssay(slug: string) {
  return selectedEssays.find((essay) => essay.slug === slug);
}

export async function readSelectedEssay(slug: string) {
  // Only the explicit selection may be served; never derive a file from a URL.
  const essay = getSelectedEssay(slug);
  if (!essay) return null;
  const sourcePath = path.resolve(expressionRoot, essay.source);
  if (!sourcePath.startsWith(`${expressionRoot}${path.sep}`) || !sourcePath.endsWith(".md")) {
    throw new Error(`Essay source must be Markdown inside expression/: ${essay.source}`);
  }
  const { data, content } = matter(await readFile(sourcePath, "utf8"));
  if (typeof data.title !== "string" || !data.title.trim()) {
    throw new Error(`Essay needs a title in frontmatter: ${essay.source}`);
  }
  if (data.date !== undefined && (typeof data.date !== "string" || !data.date.trim())) {
    throw new Error(`Essay date must be a nonempty quoted string: ${essay.source}`);
  }
  return {
    ...essay,
    title: data.title,
    date: data.date as string | undefined,
    markdown: content,
  };
}
