import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import profile from "@/content/profile.json";
import selectedEssays from "@/content/selected-essays.json";
import { readSelectedEssay } from "@/lib/selected-essays";
import { SiteShell } from "@/components/SiteShell";
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
    <SiteShell active="personhood">
      <header className={styles.profile}>
        <Image
          className={styles.photo}
          src="/profile.png"
          alt={profile.name}
          width={48}
          height={48}
          priority
        />
        <h1 className={styles.title}>{profile.name}</h1>
        <p className={styles.bio}>{profile.bio}</p>
        <p className={styles.social}><a href={profile.xUrl}>x</a></p>
      </header>
      <hr className={styles.divider} />
      <ul className={styles.stream} aria-label="selected essays">
        {essays.map((essay) => (
          <li key={essay.slug}>
            <Link href={`/${essay.slug}`}>{essay.title}</Link>
          </li>
        ))}
      </ul>
    </SiteShell>
  );
}
