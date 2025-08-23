import styles from "./Tip.module.scss";

interface ITipProps {
    text: string;
}

export default function Tip({text} : ITipProps) {
  return (
    <div className={styles.tipContainer}>
        <div className={styles.tipText}>
            {text}
        </div>
    </div>
  );
}