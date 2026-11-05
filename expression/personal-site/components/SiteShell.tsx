import Image from "next/image";
import profile from "@/content/profile.json";
import { SectionNavigation } from "./SectionNavigation";
import styles from "./SiteShell.module.css";

export function SiteShell({ children }: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <Image
          className={styles.photo}
          src="/profile.png"
          alt={profile.name}
          width={48}
          height={48}
          preload
        />
        <p className={styles.name}>
          {profile.name} (<a href={profile.xUrl} target="_blank" rel="noopener noreferrer">x</a>)
        </p>
      </header>
      <hr className={styles.divider} />
      <SectionNavigation />
      <hr className={styles.divider} />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
