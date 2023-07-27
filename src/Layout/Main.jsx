import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import SideNav from "../Shared/SideNav/SideNav";

const Main = () => {
  return (
    <>
      <div className="flex font-body">
        <SideNav />
        <Header />
      </div>
      <div className="bg-primary">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
