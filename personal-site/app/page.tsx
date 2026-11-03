import type { Metadata } from "next";
import archive from "@/content/expressions.json";
import maipai from "@/content/maipai.json";
import styles from "./page.module.css";

export const dynamic = "error";

export const metadata: Metadata = {
  title: { absolute: "karthik | trying to be human" },
  description: maipai.paragraph,
  alternates: { canonical: "https://www.koopuluri.com" },
  openGraph: {
    type: "website",
    title: "karthik | trying to be human",
    siteName: "karthik",
    description: maipai.paragraph,
    url: "https://www.koopuluri.com",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "karthik | trying to be human",
    description: maipai.paragraph,
    creator: "@koopuluri",
    images: [],
  },
};

export default function Home() {
  const posts = [...archive.posts].sort((a, b) =>
    b.publishedDate.localeCompare(a.publishedDate) ||
    (BigInt(a.id) > BigInt(b.id) ? -1 : BigInt(a.id) < BigInt(b.id) ? 1 : 0),
  );

  return (
    <main className={styles.page} aria-label="karthik's expressions">
      <p className={styles.intro}>{maipai.paragraph}</p>
      <ol className={styles.stream} aria-label="selected expressions, newest first">
        {posts.map((post) => (
          <li className={styles.expression} key={post.id}>
            <a href={post.url}>{post.title}</a>
          </li>
        ))}
      </ol>
    </main>
  );
}
