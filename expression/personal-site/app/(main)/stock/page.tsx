import type { Metadata } from "next";
import styles from "@/components/SiteShell.module.css";

export const dynamic = "error";
export const metadata: Metadata = {
  title: "personal stock",
  alternates: { canonical: "/stock" },
};

export default function StockPage() {
  return (
    <>
      <h1>personal stock</h1>
      <p className={styles.placeholder}>more on my personal stock soon.</p>
    </>
  );
}
