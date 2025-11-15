import Title from "@/components/Title/Title";
import BlobContainer from "../../BlobContainer/BlobContainer";
import PageSection from "../../PageSection/PageSection";
import styles from "./Footer.module.scss";
import whatsappIcon from "../../../assets/whatsupp-icon.png";
import instagramIcon from "../../../assets/gram-icon.png";
import linkedinIcon from "../../../assets/cringe-social-icon.png";
import ctaArrow from "../../../assets/cta-button.svg";

export default function Footer() {
  return (
    <PageSection>
      <BlobContainer>
        <div className={styles.mainContainer}>
          <div className={styles.content}>
            <Title fontSize="40px" />
            <div className={styles.title}>
              Let’s Turn Your Dream Into Reality
            </div>
            <div className={styles.subtext}>
              We bring your vision to life with creativity and precision. Let’s
              make it happen.
            </div>
            <div className={styles.socials}>
              <img src={whatsappIcon} alt="" />
              <img src={instagramIcon} alt="" />
              <img src={linkedinIcon} alt="" />
            </div>
            <div className={styles.bookButton}>
              Book a Call <img src={ctaArrow} alt="" />
            </div>
            <div className={styles.seperator} />

            <div className={styles.subtext}>
              Copyright Mabhfx. All rights reserved
            </div>
          </div>
        </div>
      </BlobContainer>
    </PageSection>
  );
}
