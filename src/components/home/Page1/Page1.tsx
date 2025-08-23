import Button from "../../Button/Button";
import PageSection from "../../PageSection/PageSection";
import Tip from "../../Tip/Tip";
import styles from "./Page1.module.scss";

export default function Page1() {
  return (
    <PageSection>
      <div className={styles.parentContainer}>
        <div className={styles.animationContainer}>
          <div className={`${styles.blob} ${styles.blob1}`}></div>
          <div className={`${styles.blob} ${styles.blob2}`}></div>
          <div className={styles.mainContainer}>
            <Tip text="Get ready to level up your digital presence" />
            <div className={styles.typography}>
              We Create Content that{" "}
              <span className={styles.accent}>Connects</span> &{" "}
              <span className={styles.accent}>Converts</span>
            </div>
            <div className={styles.subtitle}>
              Top-Tier Digital Experiences for High-Impact Brands
            </div>
            <Button text="Let's Talk" />
          </div>
        </div>
      </div>
    </PageSection>
  );
}
