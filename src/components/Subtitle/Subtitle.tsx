import styles from "./Subtitle.module.scss";
export default function Subtitle() {
  return (
    <div className={styles.subtitle}>
      I’m a <span className={styles.accent}>Creative Editor and Designer</span> Fueled by Pixels and
      Purpose
    </div>
  );
}
