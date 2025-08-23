import { useRef, useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Subtitle from "../Subtitle/Subtitle";
import Title from "../Title/Title";
import styles from "./HeroSection.module.scss";

//Images for mouse trail
import mouseImg1 from "../../assets/mouse1.png";
import mouseImg2 from "../../assets/mouse2.png";
import mouseImg3 from "../../assets/mouse3.png";
import mouseImg4 from "../../assets/mouse4.jpg";
import mouseImg5 from "../../assets/mouse5.jpg";
import mouseImg6 from "../../assets/mouse6.jpg";
import mouseImg7 from "../../assets/mouse7.png";
import mouseImg8 from "../../assets/mouse8.png";
import mouseImg9 from "../../assets/mouse9.png";
import mouseImg10 from "../../assets/mouse10.png";
import mouseImg11 from "../../assets/mouse11.png";
import mouseImg12 from "../../assets/mouse12.png";
import mouseImg13 from "../../assets/mouse13.png";
import mouseImg14 from "../../assets/mouse14.png";
import mouseImg15 from "../../assets/mouse15.png";
import gsap from "gsap";
import PageSection from "../PageSection/PageSection";

export default function HeroSection() {
  const trailContainerRef = useRef<HTMLDivElement>(null);
  const lastX = useRef<number | null>(null);
  const lastY = useRef<number | null>(null);
  const lastImage = useRef<number>(0);
  const mouseImages = [
    mouseImg1,
    mouseImg2,
    mouseImg3,
    mouseImg4,
    mouseImg5,
    mouseImg6,
    mouseImg7,
    mouseImg8,
    mouseImg9,
    mouseImg10,
    mouseImg11,
    mouseImg12,
    mouseImg13,
    mouseImg14,
    mouseImg15,
  ];
  const axisDiff = 100; // Minimum distance in pixels to create a new image
  const imageSize = "200px";

  //Needed to toggle animation on mouse enter and leave
  const [enableAnimation, setEnableAnimation] = useState(false);

  useEffect(() => {
    if (!enableAnimation) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Always create the first image
      if (lastX.current === null || lastY.current === null) {
        lastX.current = e.clientX;
        lastY.current = e.clientY;
      }
      // If the mouse hasn't moved enough, don't create a new image
      else if (
        Math.abs(e.clientX - lastX.current) < axisDiff &&
        Math.abs(e.clientY - lastY.current) < axisDiff
      ) {
        return;
      }
      // Update last positions and continue to create the image
      else {
        lastX.current = e.clientX;
        lastY.current = e.clientY;
      }

      const container = trailContainerRef.current;
      if (!container) return;

      const img = document.createElement("img");
      img.src = mouseImages[lastImage.current];
      img.alt = "mouse trail";
      img.style.position = "fixed";
      img.style.left = `${e.clientX - 25}px`;
      img.style.top = `${e.clientY - 25}px`;
      img.style.width = "auto";
      img.style.height = imageSize;
      img.style.pointerEvents = "none";
      img.style.zIndex = "10";

      img.style.opacity = "0";
      container.appendChild(img);

      // Fade in the image
      gsap.to(img, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });

      lastImage.current = (lastImage.current + 1) % 15;

      // Let the image stay for 1s, then fade out and remove
      setTimeout(() => {
        gsap.to(img, {
          opacity: 0,
          scale: 0.5,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            img.remove();
          },
        });
      }, 1000);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [enableAnimation]);

  return (
    <PageSection>
      <div
        className={styles.trailContainer}
        ref={trailContainerRef}
        onMouseLeave={() => setEnableAnimation(false)}
        // onMouseEnter={() => setEnableAnimation(true)}
      >
        <Navbar />
        <Title />
        <Subtitle />
      </div>
    </PageSection>
  );
}
