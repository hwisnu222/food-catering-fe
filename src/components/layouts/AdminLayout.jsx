import React from "react";
import { Outlet } from "react-router";
import Header from "../headers/Header";
import SubHeader from "../headers/SubHeader";

export default function AdminLayout() {
  return (
    <div>
      <Header />
      <SubHeader />
      <Outlet />
    </div>
  );
}
