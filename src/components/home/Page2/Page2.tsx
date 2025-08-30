import PageSection from "../../PageSection/PageSection";
import FeatureCard from "../../FeatureCard/FeatureCard";

import styles from "./Page2.module.scss";

import silverBars from "../../../assets/silver-bars.png";
import bgLeft from "../../../assets/bg_shape_left.png";
import bgRight from "../../../assets/bg_shape_right.png";
import layerIcon from "../../../assets/page2-layers.png";
import priceIcon from "../../../assets/page2-price.png";
import teamIcon from "../../../assets/page2-team.png";
import bestIcon from "../../../assets/page2-best.png";

export default function Page2() {
  return (
    <PageSection>
      <div className={styles.content}>
        <img src={bgLeft} className={styles.bgLeft} />
        <img src={bgRight} className={styles.bgRight} />

        <div className={styles.mainSection}>
          <div className={styles.circle}>
            <img src={layerIcon} alt="" />
          </div>
          <img className={styles.silverBars} src={silverBars} />

          <div className={styles.leftCard}>
            <FeatureCard
              title={"Best-in-class Work"}
              description={
                "Unmatched quality, seamless design, and high-performance solutions. We delivers best-in-class work that drives results"
              }
              iconSource={bestIcon}
            />
          </div>

          <div className={styles.rightCard}>
            <FeatureCard
              title={"Expert Team"}
              description={
                "Powered by a team of skilled designers, developers, and strategists who bring creativity and precision to every project."
              }
              iconSource={teamIcon}
            />
          </div>

          <div className={styles.bottomCard}>
            <FeatureCard
              title={"Freelance Rates"}
              description={
                "We provide agency level work and support at freelance rates. Our pricing reflects the quality, we bring to every project"
              }
              iconSource={priceIcon}
            />
          </div>
        </div>
      </div>
    </PageSection>
  );
}
