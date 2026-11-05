import type { Metadata } from "next";
import Link from "next/link";
import profile from "@/content/profile.json";
import selectedEssays from "@/content/selected-essays.json";
import { readSelectedEssay } from "@/lib/selected-essays";
import styles from "./page.module.css";

export const dynamic = "error";

export const metadata: Metadata = {
  title: { absolute: profile.name },
  description: profile.bio,
  alternates: { canonical: "/" },
};

export default async function Home() {
  const essays = await Promise.all(selectedEssays.map(async ({ slug }) => {
    const essay = await readSelectedEssay(slug);
    if (!essay) throw new Error(`Selected essay missing: ${slug}`);
    return essay;
  }));
  return (
    <>
      <h1>expressions</h1>
      <ul className={styles.stream} aria-label="selected essays">
        {essays.map((essay) => (
          <li key={essay.slug}>
            <Link href={`/${essay.slug}`}>{essay.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
