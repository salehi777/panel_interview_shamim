import { useEffect } from "react";
import clsx from "clsx";
import { Box, Drawer, useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useGlobalTheme } from "Hooks/useGlobalTheme";
import styles from "./styles.module.scss";

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { TbMail } from "react-icons/tb";
import { TbFileInvoice } from "react-icons/tb";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoShapesOutline } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";

const navList = [
  {
    Icon: MdOutlineSpaceDashboard,
    label: "داشبورد",
    path: "/",
  },
  {
    Icon: CgProfile,
    label: "پروفایل",
    path: "/profile",
  },
  {
    Icon: HiOutlineChatBubbleLeftRight,
    label: "گفتگوها",
    path: "/chats",
  },
  {
    Icon: TbMail,
    label: "ارسال دعوت‌نامه",
    path: "/send-invite",
  },
  {
    Icon: TbFileInvoice,
    label: "صدور پیش‌فاکتور",
    path: "/create-invoice",
  },
  {
    Icon: AiOutlineUserAdd,
    label: "عضویت در کانتمو",
    path: "/join",
  },
  {
    Icon: IoShapesOutline,
    label: "نمایش آثار",
    path: "/display-workd",
  },
];

export default function Navbar() {
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));
  const location = useLocation();
  const {
    globalTheme: { drawerOpen },
    toggleDrawer,
  } = useGlobalTheme();

  useEffect(() => {
    if (isMobile && drawerOpen) toggleDrawer();
  }, []);

  return (
    <Drawer
      open
      hideBackdrop={isMobile && !drawerOpen}
      onClose={toggleDrawer}
      variant={isMobile ? "temporary" : "persistent"}
      anchor="right"
      ModalProps={{ keepMounted: true }}
      classes={{ paper: styles.paper }}
      PaperProps={{
        style: {
          transform: `translateX(${drawerOpen ? 0 : 239}px)`,
          visibility: "visible",
        },
      }}
    >
      <ul className={styles.nav}>
        {navList.map(({ Icon, label, path }) => (
          <li key={label}>
            <Link
              to={path}
              className={clsx(location.pathname === path && styles.active)}
            >
              <span>
                <Icon />
              </span>
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <Box
        onClick={toggleDrawer}
        className={styles.arrow}
        sx={{
          left: drawerOpen ? -14 : -28,
          transform: `rotate(${drawerOpen ? 0 : 180}deg)`,
          background: (theme) =>
            theme.palette.mode === "light" ? "#ffffff" : "#303030",
        }}
      >
        <SlArrowRight />
      </Box>
    </Drawer>
  );
}
