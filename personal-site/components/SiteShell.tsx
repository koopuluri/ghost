import Link from "next/link";
import { StackIcon, type Section } from "./StackIcon";
import styles from "./SiteShell.module.css";

const sections: { id: Section; href: string; label: string }[] = [
  { id: "personhood", href: "/", label: "personhood" },
  { id: "ai", href: "/ai", label: "personal artificial intelligence" },
  { id: "stock", href: "/stock", label: "personal stock" },
];

export function SiteShell({ active, children }: {
  active: Section;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <nav className={styles.navigation} aria-label="main navigation">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={section.href}
              className={styles.navLink}
              aria-label={section.label}
              aria-current={active === section.id ? "page" : undefined}
            >
              <StackIcon section={section.id} />
            </Link>
          ))}
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
