import { MdOutlineNavigateNext } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import logo from "../../assets/logo.png";
import userIcon from "../../assets/userIcon.png";
import dashboard from "../../assets/dashboard.png";
import customer from "../../assets/customer.png";
import supplier from "../../assets/supplier.png";
import inventory from "../../assets/inventory.png";
import purchase from "../../assets/purchase.png";
import invoice from "../../assets/invoice.png";
import returns from "../../assets/return.png";
import stock from "../../assets/stock.png";
import bank from "../../assets/bank.png";
import accounts from "../../assets/accounts.png";
import report from "../../assets/report.png";
import humanResource from "../../assets/humanResource.png";
import tax from "../../assets/tax.png";
import service from "../../assets/service.png";
import search from "../../assets/search.png";
import setting from "../../assets/setting.png";
import autoUpdate from "../../assets/autoUpdate.png";

const SideNav = ({ open, setOpen, nav, setNav }) => {
  return (
    <div>
      {/* for large device */}
      <div
        className={`${
          open ? "w-[70px]" : "w-[300px]"
        } duration-300 lg:block hidden`}
      >
        {!open && (
          <div className="bg-white ">
            <div className="ml-4 my-5">
              <img src={logo} alt="" />
            </div>

            <div className="flex items-center space-x-1 mt-4 ml-4">
              <div>
                <img width={50} src={userIcon} alt="" />
              </div>
              <div className="text-sm">
                <h1 className="font-semibold">admin user</h1>
                <h1>admin@gmail.com</h1>
              </div>
            </div>
          </div>
        )}
        {!open && <hr className="w-full mt-3 mb-4" />}
        {/* links */}
        <div
          className={`${
            open ? "grid justify-center mr-2" : "bg-white grid ml-5"
          }`}
        >
          <button>
            <h1 className="flex items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3 ">
              <img src={dashboard} alt="" />
              {!open && <span className="ml-2"> Dashboard</span>}
            </h1>
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={customer} alt="" />
              {!open && <span className="ml-2"> Customer</span>}
            </h1>
            {!open && <MdOutlineNavigateNext className="mr-2 text-xl" />}
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={supplier} alt="" />
              {!open && <span className="ml-2"> Supplier</span>}
            </h1>
            {!open && <MdOutlineNavigateNext className="mr-2 text-xl" />}
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={inventory} alt="" />
              {!open && <span className="ml-2"> Inventory /Medicine </span>}
            </h1>
            {!open && <MdOutlineNavigateNext className="mr-2 text-xl" />}
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={purchase} alt="" />
              {!open && <span className="ml-2"> Purchase</span>}
            </h1>
            {!open && <MdOutlineNavigateNext className="mr-2 text-xl" />}
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={invoice} alt="" />
              {!open && <span className="ml-2"> Invoice</span>}
            </h1>
            {!open && <MdOutlineNavigateNext className="mr-2 text-xl" />}
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={returns} alt="" />
              {!open && <span className="ml-2"> Return</span>}
            </h1>
            {!open && <MdOutlineNavigateNext className="mr-2 text-xl" />}
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={stock} alt="" />
              {!open && <span className="ml-2"> Stock</span>}
            </h1>
            {!open && <MdOutlineNavigateNext className="mr-2 text-xl" />}
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={bank} alt="" />
              {!open && <span className="ml-2"> Bank</span>}
            </h1>
            {!open && <MdOutlineNavigateNext className="mr-2 text-xl" />}
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={accounts} alt="" />
              {!open && <span className="ml-2"> Accounts</span>}
            </h1>
            {!open && <MdOutlineNavigateNext className="mr-2 text-xl" />}
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={report} alt="" />
              {!open && <span className="ml-2"> Report</span>}
            </h1>
            {!open && <MdOutlineNavigateNext className="mr-2 text-xl" />}
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={humanResource} alt="" />
              {!open && <span className="ml-2"> Human Resource</span>}
            </h1>
            {!open && <MdOutlineNavigateNext className="mr-2 text-xl" />}
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={tax} alt="" />
              {!open && <span className="ml-2"> Tax</span>}
            </h1>
            {!open && <MdOutlineNavigateNext className="mr-2 text-xl" />}
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={service} alt="" />
              {!open && <span className="ml-2"> Service</span>}
            </h1>
            {!open && <MdOutlineNavigateNext className="mr-2 text-xl" />}
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={search} alt="" />
              {!open && <span className="ml-2"> Search</span>}
            </h1>
            {!open && <MdOutlineNavigateNext className="mr-2 text-xl" />}
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={setting} alt="" />
              {!open && <span className="ml-2"> Application Setting</span>}
            </h1>
            {!open && <MdOutlineNavigateNext className="mr-2 text-xl" />}
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={autoUpdate} alt="" />
              {!open && <span className="ml-2"> Autoupdate</span>}
            </h1>
            {!open && <MdOutlineNavigateNext className="mr-2 text-xl" />}
          </button>
        </div>
      </div>
      {/* for other devices */}
      <div
        className={`${
          nav
            ? "absolute bg-white w-[300px] left-0 duration-500"
            : "absolute left-[-300px] duration-500 "
        } lg:hidden z-50`}
      >
        <div className="">
          <div className="ml-4 my-5 flex justify-between">
            <img src={logo} alt="" />
            <RxCross2
              className="text-2xl cursor-pointer"
              onClick={() => setNav(!nav)}
            />
          </div>

          <div className="flex items-center space-x-1 mt-4 ml-4">
            <div>
              <img width={50} src={userIcon} alt="" />
            </div>
            <div className="text-sm">
              <h1 className="font-semibold">admin user</h1>
              <h1>admin@gmail.com</h1>
            </div>
          </div>
        </div>
        <hr className="w-full mt-3 mb-4" />
        {/* links */}
        <div className="grid ml-4">
          <button>
            <h1 className="flex items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3 ">
              <img src={dashboard} alt="" />
              <span className="ml-2"> Dashboard</span>
            </h1>
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={customer} alt="" />
              <span className="ml-2"> Customer</span>
            </h1>
            <MdOutlineNavigateNext className="mr-2 text-xl" />
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={supplier} alt="" />
              <span className="ml-2"> Supplier</span>
            </h1>
            <MdOutlineNavigateNext className="mr-2 text-xl" />
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={inventory} alt="" />
              <span className="ml-2"> Inventory /Medicine </span>
            </h1>
            <MdOutlineNavigateNext className="mr-2 text-xl" />
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={purchase} alt="" />
              <span className="ml-2"> Purchase</span>
            </h1>
            <MdOutlineNavigateNext className="mr-2 text-xl" />
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={invoice} alt="" />
              <span className="ml-2"> Invoice</span>
            </h1>
            <MdOutlineNavigateNext className="mr-2 text-xl" />
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={returns} alt="" />
              <span className="ml-2"> Return</span>
            </h1>
            <MdOutlineNavigateNext className="mr-2 text-xl" />
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={stock} alt="" />
              <span className="ml-2"> Stock</span>
            </h1>
            <MdOutlineNavigateNext className="mr-2 text-xl" />
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={bank} alt="" />
              <span className="ml-2"> Bank</span>
            </h1>
            <MdOutlineNavigateNext className="mr-2 text-xl" />
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={accounts} alt="" />
              <span className="ml-2"> Accounts</span>
            </h1>
            <MdOutlineNavigateNext className="mr-2 text-xl" />
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={report} alt="" />
              <span className="ml-2"> Report</span>
            </h1>
            <MdOutlineNavigateNext className="mr-2 text-xl" />
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={humanResource} alt="" />
              <span className="ml-2"> Human Resource</span>
            </h1>
            <MdOutlineNavigateNext className="mr-2 text-xl" />
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={tax} alt="" />
              <span className="ml-2"> Tax</span>
            </h1>
            <MdOutlineNavigateNext className="mr-2 text-xl" />
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={service} alt="" />
              <span className="ml-2"> Service</span>
            </h1>
            <MdOutlineNavigateNext className="mr-2 text-xl" />
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={search} alt="" />
              <span className="ml-2"> Search</span>
            </h1>
            <MdOutlineNavigateNext className="mr-2 text-xl" />
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={setting} alt="" />
              <span className="ml-2"> Application Setting</span>
            </h1>
            <MdOutlineNavigateNext className="mr-2 text-xl" />
          </button>
          <button className="flex justify-between items-center hover:bg-secondary hover:text-secondary py-4 rounded-l-full pl-3">
            <h1 className="flex items-center">
              <img src={autoUpdate} alt="" />
              <span className="ml-2"> Autoupdate</span>
            </h1>
            <MdOutlineNavigateNext className="mr-2 text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
