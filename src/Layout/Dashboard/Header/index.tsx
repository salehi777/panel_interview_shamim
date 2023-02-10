import { Switch, Card } from "@mui/material";
import styles from "./styles.module.scss";
import Badge from "@mui/material/Badge";
import IconButton from "Components/IconButton";
import { useGlobalTheme } from "Hooks/useGlobalTheme";

import { IoIosNotificationsOutline } from "react-icons/io";
import { RiSettings4Line } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { HiSun } from "react-icons/hi";

export default function Header() {
  const { globalTheme, setMode } = useGlobalTheme();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode(event.target.checked ? "light" : "dark");
  };

  return (
    <Card component="header" className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className={styles.buttons}>
        <Badge badgeContent={4} color="primary" overlap="circular">
          <IconButton>
            <IoIosNotificationsOutline />
          </IconButton>
        </Badge>
        <div>
          <IconButton>
            <RiSettings4Line />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <IoMdLogOut />
          </IconButton>
        </div>
        <div className={styles.switch}>
          <Switch
            checked={globalTheme.palette.mode === "light"}
            onChange={handleChange}
          />
        </div>
      </div>
    </Card>
  );
}
