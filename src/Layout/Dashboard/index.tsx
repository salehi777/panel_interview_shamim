import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import styles from "./styles.module.scss";

export default function DashboardLayout() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
