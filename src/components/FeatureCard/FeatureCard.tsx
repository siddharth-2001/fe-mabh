import React from "react";
import styles from "./FeatureCard.module.scss";

interface FeatureCardProps {
  title: string;
  description: string;
  iconSource: string;
  iconColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  iconSource,
  iconColor = "#E800E8",
}) => {
  return (
    <div className={styles.featureCardContainer}>
      <div className={styles.iconCircle} style={{ backgroundColor: iconColor }}>
        <div className={styles.icon}>
          <img src={iconSource}/>
        </div>
      </div>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
