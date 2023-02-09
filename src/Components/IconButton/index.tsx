import MuiIconButton, { IconButtonProps } from "@mui/material/IconButton";
import styles from "./styles.module.scss";
import clsx from "clsx";

export default function IconButton(props: IconButtonProps) {
  const { className, ...rest } = props;
  return (
    <MuiIconButton className={clsx(className, styles.iconButton)} {...rest} />
  );
}
