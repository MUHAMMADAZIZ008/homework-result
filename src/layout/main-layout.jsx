import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {

  return (
    <div className="flex">
      <div className="w-[300px] bg-blue-900 h-screen text-2xl flex items-start justify-self-start pl-[50px] pt-[100px] ">
        <div>
          <Link className="text-[#F2EFE7] font-semibold text-3xl" to={"/create-todo"}>
            Crate task
          </Link>
        </div>
      </div>
      <div className="grow-1">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
