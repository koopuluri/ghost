import type { Metadata } from "next";
import styles from "@/components/GhostEssay.module.css";
import { socialMetadata } from "@/lib/social-metadata";

export const dynamic = "error";
export const metadata: Metadata = {
  title: { absolute: "π" },
  alternates: { canonical: "/π" },
  ...socialMetadata({ title: "π", path: "/π", image: "ai" }),
};

export default function AIPage() {
  return (
    <>
      <h1>personal artificial intelligence</h1>
      <article className={styles.body}>
        <p>(under construction).</p>
      </article>
    </>
  );
}
