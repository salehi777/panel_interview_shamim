import MuiCard, { CardProps } from "@mui/material/Card";
import clsx from "clsx";
import styles from "./styles.module.scss";

export default function Card(props: CardProps) {
  const { className, ...rest } = props;
  return (
    <MuiCard className={clsx(className, styles.card)} elevation={4} {...rest} />
  );
}
