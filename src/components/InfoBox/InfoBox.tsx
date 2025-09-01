import styles from "./InfoBox.module.scss";

interface IInfoBoxProps {
  text: string;
  icon?: string;
}

export default function InfoBox({ icon, text }: IInfoBoxProps) {
  return (
    <div className={styles.infoBox}>
      <img hidden={icon == undefined} src={icon} alt="" />
      <span>{text}</span>
    </div>
  );
}
