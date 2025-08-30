import styles from './BlobContainer.module.scss';

interface IBlobContainerProps {
    children?: React.ReactNode;
}

export default function BlobContainer({children}: IBlobContainerProps) {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.animationContainer}>
        <div className={`${styles.blob} ${styles.blob1}`}></div>
        <div className={`${styles.blob} ${styles.blob2}`}></div>
        {children}
      </div>
    </div>
  );
}
