import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./Header";
import Navbar from "./Navbar";

export default function DashboardLayout() {
  return (
    <div>
      <Header />
      <Navbar />
      <main style={{ paddingTop: 85, paddingRight: 240 }}>
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
}
