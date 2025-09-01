import Carousel3D from "../../Carousel3D/Carousel3D";
import PageSection from "../../PageSection/PageSection";
import styles from "./Page3.module.scss";

import mouseImg1 from "../../../assets/mouse1.png";
import mouseImg2 from "../../../assets/mouse2.png";
import mouseImg3 from "../../../assets/mouse3.png";
import mouseImg4 from "../../../assets/mouse4.jpg";
import mouseImg5 from "../../../assets/mouse5.jpg";
import graphicsIcon from "../../../assets/graphics-icon.png";
import InfoBox from "../../InfoBox/InfoBox";

export default function Page3() {
  const images = [
    mouseImg1,
    mouseImg2,
    mouseImg3,
    mouseImg4,
    mouseImg5,
    mouseImg1,
    mouseImg2,
    mouseImg3,
    mouseImg4,
    mouseImg5,
  ];

  return (
    <PageSection>
      <div className={styles.mainContainer}>
        <InfoBox text="Graphics" icon={graphicsIcon} />
        <div className={styles.textContainer}>
          <span className={styles.title}>Design To Stare</span>
          <span className={styles.subtext}>
            We create the most stunning graphic designs for your social media,
            websites, branding, or literally anything. They are just mindblowing
          </span>
        </div>

        <Carousel3D images={images} />
      </div>
    </PageSection>
  );
}
