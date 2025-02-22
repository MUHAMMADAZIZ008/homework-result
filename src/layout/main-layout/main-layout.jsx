import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Stack height={"100vh"} justifyContent={"space-between"}>
        <div>
          <Header />
          <main>
            <Outlet />
          </main>
        </div>

        <Footer />
      </Stack>
    </>
  );
};

export default MainLayout;
