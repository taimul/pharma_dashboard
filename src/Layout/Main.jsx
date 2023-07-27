import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import SideNav from "../Shared/SideNav/SideNav";
import { useState } from "react";

const Main = () => {
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="flex font-body">
        <SideNav open={open} setOpen={setOpen} nav={nav} setNav={setNav} />
        <div className="w-full">
          <Header open={open} setOpen={setOpen} nav={nav} setNav={setNav} />
          <div className="bg-secondary h-screen">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
