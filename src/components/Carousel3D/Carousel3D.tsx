import { useEffect, useState } from "react";
import styles from "./Carousel3D.module.scss";

interface ICarousel3DProps {
  images: string[];
}

export default function Carousel3D({ images }: ICarousel3DProps) {
  const [angle, setAngle] = useState(0);
  const itemCount = images.length;
  const radius = 1200; // push cards around you in a circle

  const rotateNext = () => setAngle((prev) => prev - 360 / itemCount);

  useEffect(() => {
    const interval = setInterval(() => {
      rotateNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carouselWrapper}>
      <div
        className={styles.carousel}
        style={{ transform: `translateZ(-${radius}px) rotateY(${angle}deg)` }}
      >
        {images.map((item, index) => (
          <div
            key={item.toString()}
            className={styles.carouselItem}
            style={{
              transform: `rotateY(${(360 / itemCount) * index}deg) translateZ(${
                -1 * radius
              }px)`,
            }}
          >
            <div className={styles.imageContainer}>
              <img className={styles.image} src={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
