import { useMemo } from "react";
import styles from "./Navbar.module.scss";
import Button from "../Button/Button";

export default function Navbar() {

  const menuItems = ["Home", "Services", "About", "Contact"];
  const links = useMemo(() => {
    return menuItems.map((item) => (
      <div className={item === "Home" ? styles.accent : ''} key={item}>
        {item}
      </div>
    ))
  }, [])

  return (
    <div className={styles.navbar}>
      {links}
      <Button text="Let's Talk" />
    </div>
  );
}
