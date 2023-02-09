import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

interface Props {
  children: React.ReactElement;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div>
      <Container component="main">
        <Outlet />
      </Container>
    </div>
  );
}
