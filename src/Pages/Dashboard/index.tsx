import { useState } from "react";
import { Helmet } from "react-helmet";
import { Grid } from "@mui/material";
import styles from "./styles.module.scss";
import UserDetails from "./UserDetails";
import MyWorksSection from "./MyWorksSection";
import Button from "Components/Button";

import { TbLayoutList, TbClock } from "react-icons/tb";
import { HiOutlineFolderAdd } from "react-icons/hi";

const datas = [
  {
    title: "تدوین و صداگذاری",
    data: [
      {
        id: 1,
        image: "/kala.png",
        name: "تدوین تیزر تبلیغاتی انرژی زا",
      },
      {
        id: 1,
        image: "/kala.png",
        name: "تدوین تیزر تبلیغاتی انرژی زا",
      },
      {
        id: 1,
        image: "/kala.png",
        name: "تدوین تیزر تبلیغاتی انرژی زا",
      },
      {
        id: 1,
        image: "/kala.png",
        name: "تدوین تیزر تبلیغاتی انرژی زا",
      },
      {
        id: 1,
        image: "/kala.png",
        name: "تدوین تیزر تبلیغاتی انرژی زا",
      },
      {
        id: 1,
        image: "/kala.png",
        name: "تدوین تیزر تبلیغاتی انرژی زا",
      },
    ],
  },
  {
    title: "طراحی و گرافیک",
    data: [
      {
        id: 1,
        image: "/kala.png",
        name: "طراحی سایت آموزشی آشپزی",
      },
      {
        id: 1,
        image: "/kala.png",
        name: "طراحی سایت آموزشی آشپزی",
      },
    ],
  },
  {
    title: "گویندگی و خوانندگی",
    data: [
      {
        id: 1,
        image: "/kala.png",
        name: 'خوانش کتاب صوتی "کتابخانه نیمه شپ"',
      },
      {
        id: 1,
        image: "/kala.png",
        name: 'خوانش کتاب صوتی "کتابخانه نیمه شپ"',
      },
      {
        id: 1,
        image: "/kala.png",
        name: 'خوانش کتاب صوتی "کتابخانه نیمه شپ"',
      },
      {
        id: 1,
        image: "/kala.png",
        name: 'خوانش کتاب صوتی "کتابخانه نیمه شپ"',
      },
    ],
  },
];

export default function DashboardPage() {
  const [view, setView] = useState("list");
  const toggleView = () => setView(view === "list" ? "time" : "list");

  return (
    <>
      <Helmet>
        <title>داشبورد</title>
      </Helmet>

      <Grid container spacing={3} pt={3} className={styles.dashboard}>
        <Grid item xs={12} md={12} lg={4} xl={3} className={styles.details}>
          <UserDetails />
        </Grid>

        <Grid
          item
          container
          direction="column"
          xs={12}
          md={12}
          lg={8}
          xl={9}
          rowSpacing={3}
          className={styles.works}
        >
          <Grid item className={styles.worksHead}>
            <span>آثار من:</span>
            <div>
              <span>نوع نمایش: &nbsp;</span>
              <div>
                <span
                  data-active={view === "list"}
                  data-view="list"
                  onClick={toggleView}
                >
                  <TbLayoutList />
                </span>
                <span
                  data-active={view === "time"}
                  data-view="time"
                  onClick={toggleView}
                >
                  <TbClock />
                </span>
              </div>
            </div>
          </Grid>

          {datas.map(({ title, data }) => (
            <Grid item>
              <MyWorksSection
                title={title}
                onEdit={() => {}}
                onDelete={() => {}}
                onAdd={() => {}}
                data={data}
              />
            </Grid>
          ))}

          <Grid item>
            <Button
              // variant="text"
              variant="outlined"
              startIcon={<HiOutlineFolderAdd />}
              className={styles.addCategory}
            >
              افزودن دسته جدید
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
