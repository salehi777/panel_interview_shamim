import { useState } from "react";
import { Switch } from "@mui/material";
import styles from "./styles.module.scss";
import Badge from "@mui/material/Badge";
import IconButton from "Components/IconButton";

import { IoIosNotificationsOutline } from "react-icons/io";
import { RiSettings4Line } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { HiSun } from "react-icons/hi";

export default function Header() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>LOGO</div>
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
          <Switch checked={checked} onChange={handleChange} />
        </div>
      </div>
    </header>
  );
}
