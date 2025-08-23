import styles from "./PageSection.module.scss";

interface IPageSectionProps {
    children?: React.ReactNode;
}

export default function PageSection({children}: IPageSectionProps) {
  return (
    <div className={styles.pageSection}>
      {children}
    </div>
  );
}