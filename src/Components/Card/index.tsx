import { Card, CardProps } from "@mui/material";
import clsx from "clsx";
import styles from "./styles.module.scss";

export default function Card3(props: CardProps) {
  const { className, ...rest } = props;
  return (
    <Card className={clsx(className, styles.card)} elevation={4} {...rest} />
  );
}
