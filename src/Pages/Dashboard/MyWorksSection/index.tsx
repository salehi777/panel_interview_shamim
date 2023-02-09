import { Grid } from "@mui/material";
import Card from "Components/Card";
import styles from "./styles.module.scss";

import { TbEdit } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoAddCircleOutline } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";

interface Props {
  title: string;
  onEdit: Function;
  onDelete: Function;
  onAdd: Function;
  data: {
    id: number;
    image: string;
    name: string;
  }[];
}

export default function MyWorksSection(props: Props) {
  const { title, onEdit, onDelete, onAdd, data } = props;

  return (
    <Card>
      <div className={styles.title}>
        <span>{title}</span>
        <span onClick={() => onEdit()}>
          <TbEdit />
        </span>
        <span onClick={() => onDelete()}>
          <RiDeleteBinLine />
        </span>
      </div>

      <Grid container>
        {data.slice(0, 3).map((item) => (
          <Grid item className={styles.item}>
            <div className={styles.itemMenu}>
              <BiDotsVerticalRounded />
            </div>
            <div className={styles.itemImage}>
              <img src={item.image} />
            </div>
            <div>{item.name}</div>
          </Grid>
        ))}

        <Grid item className={styles.last}>
          <Grid item className={styles.add} onClick={() => onAdd()}>
            <span>
              <IoAddCircleOutline />
            </span>
            <span>افزودن اثر</span>
          </Grid>
          <Grid item className={styles.more}>
            نمایش بیشتر...
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
