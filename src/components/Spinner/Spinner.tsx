import styles from "./styles.module.css";

interface SpinnerProps {
  color?: string;
}

export function Spinner({ color }: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label="Carregando..."
      className={styles["spinner-loader"]}
      style={{
        borderColor: color ? color : "",
        borderBottomColor: "transparent",
      }}
    ></span>
  );
}
