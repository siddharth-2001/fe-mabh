import styles from './Button.module.scss';

interface IButtonProps {
  text: string;
}

export default function Button({ text }: IButtonProps) {
  return (
    <div className={styles.button}>  
        {text}
    </div>
  );
}