import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getPostMeta, getPostSlugs } from "@/lib/posts";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  if (!meta) return {};

  const images = [{ ...site.ogImage, alt: site.name }];
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      type: "article",
      siteName: site.name,
      title: meta.title,
      description: meta.description,
      url: `${site.url}/${slug}`,
      publishedTime: meta.date || undefined,
      images,
    },
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
      images,
    },
  };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  if (!meta) notFound();

  const { default: Content } = await import(`@/posts/${slug}.mdx`);

  return (
    <>
      <div className="top-fade" aria-hidden="true" />

      <Link href="/" className="home-corner" aria-label="Home">
        <Image
          className="home-corner__img"
          src="/profile.png"
          alt="Home"
          width={48}
          height={48}
        />
      </Link>

      <main className="page essay-page">
        <header className="reveal">
          <h1 className="essay-title">{meta.title}</h1>
          {meta.date ? (
            <p className="essay-date">{formatDate(meta.date)}</p>
          ) : null}
        </header>

        <article className="essay-body reveal essay-article">
          <Content />
        </article>
      </main>
    </>
  );
}
