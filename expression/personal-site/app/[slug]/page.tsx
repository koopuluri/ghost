import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatDate, getPostMeta, getPostSlugs } from "@/lib/posts";
import { socialMetadata } from "@/lib/social-metadata";

import GhostEssay from "@/components/GhostEssay";
import { EssayHeading } from "@/components/EssayHeading";
import selectedEssays from "@/content/selected-essays.json";
import { readSelectedEssay } from "@/lib/selected-essays";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return [...selectedEssays.map(({ slug }) => ({ slug })), ...getPostSlugs().map((slug) => ({ slug }))];
}

export const dynamic = "error";
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const essay = await readSelectedEssay(slug);
  if (essay) return {
    title: { absolute: essay.title },
    alternates: { canonical: `/${slug}` },
    ...socialMetadata({ title: essay.title, path: `/${slug}`, image: `essay-${slug}`, type: "article" }),
  };
  const meta = getPostMeta(slug);
  if (!meta) return {};

  return {
    title: { absolute: meta.title },
    description: meta.description,
    ...socialMetadata({
      title: meta.title,
      path: `/${slug}`,
      image: `essay-${slug}`,
      description: meta.description,
      type: "article",
      publishedTime: meta.date || undefined,
    }),
  };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const essay = await readSelectedEssay(slug);
  if (essay) {
    return <GhostEssay essay={essay} markdown={essay.markdown} />;
  }
  const meta = getPostMeta(slug);
  if (!meta) notFound();

  const { default: Content } = await import(`@/posts/${slug}.mdx`);

  return (
    <>
      <main className="page essay-page">
        <EssayHeading title={meta.title} date={meta.date ? formatDate(meta.date) : undefined} />

        <article className="essay-body reveal">
          <Content />
        </article>
      </main>
    </>
  );
}
