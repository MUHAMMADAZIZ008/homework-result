import React from "react";
import Header from "../../pages/header/header";
import HeaderNav from "../../pages/header-nav/header-nav";

const MainLayout = ({ children }) => {
  return (<>
    <Header />
    <HeaderNav />
    <main>
        {children}
    </main>
  </>);
};

export default MainLayout;
