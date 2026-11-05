import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import styles from "@/components/SiteShell.module.css";

export const dynamic = "error";
export const metadata: Metadata = {
  title: "personal artificial intelligence",
  alternates: { canonical: "/ai" },
};

export default function AIPage() {
  return (
    <SiteShell active="ai">
      <h1>personal artificial intelligence</h1>
      <p className={styles.placeholder}>more on my personal ai soon.</p>
    </SiteShell>
  );
}
