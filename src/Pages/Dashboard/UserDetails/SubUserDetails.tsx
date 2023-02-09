import { ReactNode } from "react";
import styles from "./styles.module.scss";

import { TbEdit } from "react-icons/tb";

interface Props {
  title: string;
  onClick: Function;
  children: ReactNode;
}
export default function SubUserDetails(props: Props) {
  const { title, onClick, children } = props;

  return (
    <div className={styles.sub}>
      <div className={styles.subHead}>
        <span>{title}</span>
        <hr />
        <span onClick={() => onClick()}>
          <TbEdit />
        </span>
      </div>
      <div>{children}</div>
    </div>
  );
}
