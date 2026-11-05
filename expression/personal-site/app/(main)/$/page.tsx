import type { Metadata } from "next";
import profile from "@/content/profile.json";
import styles from "@/components/GhostEssay.module.css";
import { socialMetadata } from "@/lib/social-metadata";

export const dynamic = "error";
export const metadata: Metadata = {
  title: { absolute: "$" },
  alternates: { canonical: "/$" },
  ...socialMetadata({ title: "$", path: "/$", image: "stock" }),
};

export default function StockPage() {
  return (
    <>
      <h1>personal stock</h1>
      <article className={styles.body}>
        <p>
          I will be launching my personal stock soon according to this{" "}
          <a href="https://github.com/onrootnet/personal-stock/blob/main/agreement.md">agreement</a>.
          {" "}If you&apos;re interested in participating, DM me on{" "}
          <a href={profile.xUrl} target="_blank" rel="noopener noreferrer">X</a>.
        </p>
      </article>
    </>
  );
}
