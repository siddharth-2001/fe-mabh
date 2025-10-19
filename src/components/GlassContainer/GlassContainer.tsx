import styles from "./GlassContainer.module.scss";

export default function GlassContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.glassContainer}>{children}</div>;
}
