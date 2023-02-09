import { Avatar, Grid } from "@mui/material";
import Card from "Components/Card";
import styles from "./styles.module.scss";
import SubUserDetails from "./SubUserDetails";
import IconButton from "Components/IconButton";
import Chip from "Components/Chip";

import {
  RiDribbbleFill,
  RiFacebookCircleFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { BsDot } from "react-icons/bs";

export default function UserDetails() {
  return (
    <Card>
      <Grid container direction="column" className={styles.userDetails}>
        <Grid item>
          <SubUserDetails title="اطلاعات شناسایی" onClick={() => {}}>
            <Grid
              container
              direction="column"
              alignItems="center"
              spacing={0.8}
              className={styles.section1}
            >
              <Grid item>
                <Avatar
                  alt="مهدی ساغری"
                  src="/man-1.png"
                  sx={{ width: 64, height: 64 }}
                />
              </Grid>
              <Grid item>مهدی ساغری</Grid>
              <Grid item>
                <IconButton size="small">
                  <RiWhatsappFill />
                </IconButton>
                <IconButton size="small">
                  <RiDribbbleFill />
                </IconButton>
                <IconButton size="small">
                  <RiFacebookCircleFill />
                </IconButton>
              </Grid>
            </Grid>
          </SubUserDetails>
        </Grid>
        <Grid item>
          <SubUserDetails title="تگ‌لاین ها" onClick={() => {}}>
            <Grid container spacing={1} className={styles.section2}>
              <Grid item>
                <Chip label="تجربه کاربری" />
              </Grid>
              <Grid item>
                <Chip label="طراحی سایت" />
              </Grid>
              <Grid item>
                <Chip label="گرافیک" />
              </Grid>
            </Grid>
          </SubUserDetails>
        </Grid>
        <Grid item>
          <SubUserDetails title="درباره من" onClick={() => {}}>
            <div className={styles.section3}>
              لورم ایپسوم منت ساختگی با تولید سادگیت نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </div>
          </SubUserDetails>
        </Grid>
        <Grid item>
          <SubUserDetails title="مهارت ها" onClick={() => {}}>
            <Grid container spacing={1} className={styles.section4}>
              <Grid item>
                <Chip label="تجربه کاربری" />
              </Grid>
              <Grid item>
                <Chip label="طراحی سایت" />
              </Grid>
              <Grid item>
                <Chip label="گرافیک" />
              </Grid>
            </Grid>{" "}
          </SubUserDetails>
        </Grid>
        <Grid item>
          <SubUserDetails
            title="گواهینامه ها و مدارک تحصیلی"
            onClick={() => {}}
          >
            <div className={styles.section5}>
              <div>
                <span>
                  <BsDot />
                </span>
                <span>کارشناسی کامپیوتر - دانشگاه تبریز</span>
              </div>
              <div>
                <span>
                  <BsDot />
                </span>
                <span>مبانی طراحی - Udemy</span>
              </div>
            </div>
          </SubUserDetails>
        </Grid>
        <Grid item>
          <SubUserDetails title="سوابق شغلی" onClick={() => {}}>
            <div className={styles.section6}>
              <div>
                <span>
                  <BsDot />
                </span>
                <span>طراح تجربه کاربری - شرکت همراه</span>
              </div>
              <div>
                <span>
                  <BsDot />
                </span>
                <span>طراح گرافیک - شرکت آینده‌سازان</span>
              </div>
            </div>
          </SubUserDetails>
        </Grid>
      </Grid>
    </Card>
  );
}
