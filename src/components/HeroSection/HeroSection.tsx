import Navbar from "../Navbar/Navbar";
import Subtitle from "../Subtitle/Subtitle";
import Title from "../Title/Title";
import styles from "./HeroSection.module.scss";

import Orb from "../Orb/Orb";
import PageSection from "../PageSection/PageSection";
import GlassContainer from "../GlassContainer/GlassContainer";

export default function HeroSection() {
  return (
    <PageSection>
      <div className={styles.orbContainer}>
        <Orb
          hoverIntensity={2}
          rotateOnHover={true}
          hue={306}
          forceHoverState={false}
        />
      </div>
      <div className={styles.mainContainer}>
        <Navbar />
        <Title />
        <GlassContainer>
          <Subtitle />
        </GlassContainer>
      </div>
    </PageSection>
  );
}
