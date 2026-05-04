import type { ReactNode } from "react";
import styles from "./styles.module.css";

/**
 * Server layout imports route CSS so styles are in the first document
 * (avoids FOUC when the page is a client component).
 */
export default function FeedbackPopoverLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className={styles["feedback-wrapper"]}>{children}</div>;
}
