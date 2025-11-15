import Navbar from "../Navbar/Navbar";
import Subtitle from "../Subtitle/Subtitle";
import Title from "../Title/Title";
import styles from "./HeroSection.module.scss";

import PageSection from "../PageSection/PageSection";
import GlassContainer from "../GlassContainer/GlassContainer";
import { useMemo } from "react";
import FloatingLines from "../FloatingLines/FloatingLines";

export default function HeroSection() {
  // Memoize the Orb component to prevent unnecessary re-renders
  const memoizedOrb = useMemo(() => {
    return (
      <FloatingLines
        enabledWaves={["top", "middle"]}
        // Array - specify line count per wave; Number - same count for all waves
        lineCount={5}
        // Array - specify line distance per wave; Number - same distance for all waves
        lineDistance={5}
        bendRadius={5.0}
        middleWavePosition={ {x: 2.0, y: 0, rotate: 0 }}
        bendStrength={-0.5}
        interactive={true}
        parallax={true}
        mixBlendMode="overlay"
      />
    );
  }, []);

  return (
    <PageSection>
      <div className={styles.orbContainer}>{memoizedOrb}</div>
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
