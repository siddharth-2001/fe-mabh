import InfoBox from "../InfoBox/InfoBox";
import PageSection from "../PageSection/PageSection";
import styles from "./ContactUs.module.scss";
import voltageImg from "../../assets/high-voltage.png";
import bulletImg from "../../assets/bullet.svg";
import BlobContainer from "../BlobContainer/BlobContainer";
import jumpArrowPng from "../../assets/jump-arrow.png";

function BenefitsList() {
  return (
    <>
      <div className={styles.benefitList}>
        <div className={styles.benefitItem}>
          <img src={bulletImg} alt="" />
          <span className={styles.benefitText}>24/7 Full Time Support</span>
        </div>
        <div className={styles.benefitItem}>
          <img src={bulletImg} alt="" />
          <span className={styles.benefitText}>Available Worldwide </span>
        </div>
      </div>
    </>
  );
}

interface IInputProps {
  title: string;
  isTextArea?: boolean;
}

function Input({ title, isTextArea }: IInputProps) {
  return (
    <div className={styles.inputContainer}>
      <span className={styles.inputLabel}>{title}</span>
      {isTextArea ? (
        <textarea className={styles.inputField} rows={5} />
      ) : (
        <input className={styles.inputField} type="text" />
      )}
    </div>
  );
}

export default function ContactUs() {
  return (
    <PageSection>
      <div className={styles.mainContainer}>
        <div className={styles.textContainer}>
          <InfoBox icon={voltageImg} text="Contact Now" />
          <div className={styles.title}>Contact Us!</div>
          <span className={styles.subtext}>
            Let’s create something amazing together! Reach out I’d love to hear
            about your project and ideas.
          </span>
          <div className={styles.seperator}></div>
          <BenefitsList />
        </div>
        <div className={styles.formContainer}>
          <BlobContainer>
            <div className={styles.form}>
              <Input title="Name" />
              <Input title="Email" />
              <Input title="Contact Number" />
              <Input title="Message" isTextArea={true} />
              <div className={styles.submitButton}>Send Message <img src={jumpArrowPng} alt="" /></div>
            </div>
          </BlobContainer>
        </div>
      </div>
    </PageSection>
  );
}
