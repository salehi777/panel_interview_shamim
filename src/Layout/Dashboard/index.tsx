import clsx from "clsx";
import { Outlet } from "react-router-dom";
import { useGlobalTheme } from "Hooks/useGlobalTheme";
import Header from "./Header";
import Navbar from "./Navbar";
import styles from "./styles.module.scss";

export default function DashboardLayout() {
  const {
    globalTheme: { drawerOpen },
  } = useGlobalTheme();

  return (
    <div>
      <Header />
      <Navbar />
      <main className={clsx(styles.main, !drawerOpen && styles.mainWide)}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
