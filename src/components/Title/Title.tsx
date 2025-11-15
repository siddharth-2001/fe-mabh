import styles from "./Title.module.scss";

interface TitleProps {
  fontSize?: string;
}

export default function Title(props : TitleProps) {
  return (
    <div style={{zIndex: "2"}}>
      <div className={styles.title} style={{ fontSize: props.fontSize || "5rem" }}>
        mabh
        <span className={styles.accent}>.fx</span>
      </div>
    </div>
  );
}
