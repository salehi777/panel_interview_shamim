import { useEffect, useState } from "react";
import { Box, Grid, useMediaQuery } from "@mui/material";
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
  const [maxCount, setMaxCount] = useState(2);

  const smUp = useMediaQuery((theme: any) => theme.breakpoints.up("sm"));
  const xlUp = useMediaQuery((theme: any) => theme.breakpoints.up("xl"));

  useEffect(() => {
    setMaxCount(xlUp ? 4 : smUp ? 2 : 1);
  }, [smUp, xlUp]);

  return (
    <Card>
      <div className={styles.title}>
        <span>{title}</span>
        <span data-icon="edit" onClick={() => onEdit()}>
          <TbEdit />
        </span>
        <span data-icon="delete" onClick={() => onDelete()}>
          <RiDeleteBinLine />
        </span>
      </div>

      <Grid container spacing={1} flexWrap="nowrap">
        {data.slice(0, maxCount).map((item) => (
          <Grid item>
            <Card elevation={1} className={styles.item}>
              <Box
                className={styles.itemMenu}
                sx={{
                  background: (theme) =>
                    theme.palette.mode === "light" ? "#ffffff" : "#303030",
                }}
              >
                <BiDotsVerticalRounded />
              </Box>
              <div className={styles.itemImage}>
                <img src={item.image} alt={item.name} />
              </div>
              <div>{item.name}</div>
            </Card>
          </Grid>
        ))}

        <Grid item className={styles.last}>
          <Grid item className={styles.add} onClick={() => onAdd()}>
            <span>
              <IoAddCircleOutline />
            </span>
            <span>افزودن اثر</span>
          </Grid>
          {data.length > maxCount && (
            <Grid item className={styles.more}>
              نمایش بیشتر...
            </Grid>
          )}
        </Grid>
      </Grid>
    </Card>
  );
}
