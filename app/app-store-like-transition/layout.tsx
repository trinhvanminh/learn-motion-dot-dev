import type { ReactNode } from "react";
import styles from "./styles.module.css";

export default function AppStoreLikeTransitionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className={styles["route-root"]}>{children}</div>;
}

