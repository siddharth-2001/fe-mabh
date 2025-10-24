import Masonry from "@/components/Masonry/Masonry";
import PageSection from "@/components/PageSection/PageSection";
import styles from "./BestWork.module.scss";

import img1 from "@/assets/mouse1.png";
import img2 from "@/assets/mouse2.png";
import img3 from "@/assets/mouse3.png";
import img4 from "@/assets/mouse4.jpg";
import img5 from "@/assets/mouse5.jpg";
import img6 from "@/assets/mouse6.jpg";

export default function BestWork() {
  const items = [
    {
      id: "1",
      img: img1,
      url: "https://example.com/one",
      height: 500,
    },
    {
      id: "2",
      img: img2,
      url: "https://example.com/two",
      height: 900,
    },
    {
      id: "3",
      img: img3,
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "4",
      img: img4,
      url: "https://example.com/three",
      height: 800,
    },
    {
      id: "5",
      img: img5,
      url: "https://example.com/three",
      height: 700,
    },
    {
      id: "6",
      img: img6,
      url: "https://example.com/three",
      height: 500,
    },
    // ... more items
  ];

  return (
    <PageSection>
      <div className={styles.mainContainer}>
        <div className={styles.typography}>Our Best Work </div>
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </PageSection>
  );
}
