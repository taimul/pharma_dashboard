import { MdOutlineNavigateNext } from "react-icons/md";
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
import autoupdate from "../../assets/autoUpdate.png";

const SideNav = () => {
  return (
    <div>
      <div className="bg-white w-[250px] ">
        <div className="flex justify-center my-5">
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
      <hr className="w-full mt-3 mb-7" />
      {/* links */}
      <div className="bg-white grid ml-8 space-y-7">
        <div>
          <h1 className="flex items-center">
            <img src={dashboard} alt="" />
            <span className="ml-2"> Dashboard</span>
          </h1>
        </div>
        <button className="flex justify-between items-center">
          <h1 className="flex items-center">
            <img src={customer} alt="" />
            <span className="ml-2"> Customer</span>
          </h1>
          <MdOutlineNavigateNext className="mr-2 text-xl" />
        </button>
        <button className="flex justify-between items-center">
          <h1 className="flex items-center">
            <img src={supplier} alt="" />
            <span className="ml-2"> Supplier</span>
          </h1>
          <MdOutlineNavigateNext className="mr-2 text-xl" />
        </button>
        <button className="flex justify-between items-center">
          <h1 className="flex items-center">
            <img src={inventory} alt="" />
            <span className="ml-2"> Inventory /Medicine </span>
          </h1>
          <MdOutlineNavigateNext className="mr-2 text-xl" />
        </button>
        <button className="flex justify-between items-center">
          <h1 className="flex items-center">
            <img src={purchase} alt="" />
            <span className="ml-2"> Purchase</span>
          </h1>
          <MdOutlineNavigateNext className="mr-2 text-xl" />
        </button>
        <button className="flex justify-between items-center">
          <h1 className="flex items-center">
            <img src={invoice} alt="" />
            <span className="ml-2"> Invoice</span>
          </h1>
          <MdOutlineNavigateNext className="mr-2 text-xl" />
        </button>
        <button className="flex justify-between items-center">
          <h1 className="flex items-center">
            <img src={returns} alt="" />
            <span className="ml-2"> Return</span>
          </h1>
          <MdOutlineNavigateNext className="mr-2 text-xl" />
        </button>
        <button className="flex justify-between items-center">
          <h1 className="flex items-center">
            <img src={stock} alt="" />
            <span className="ml-2"> Stock</span>
          </h1>
          <MdOutlineNavigateNext className="mr-2 text-xl" />
        </button>
        <button className="flex justify-between items-center">
          <h1 className="flex items-center">
            <img src={bank} alt="" />
            <span className="ml-2"> Bank</span>
          </h1>
          <MdOutlineNavigateNext className="mr-2 text-xl" />
        </button>
        <button className="flex justify-between items-center">
          <h1 className="flex items-center">
            <img src={accounts} alt="" />
            <span className="ml-2"> Accounts</span>
          </h1>
          <MdOutlineNavigateNext className="mr-2 text-xl" />
        </button>
        <button className="flex justify-between items-center">
          <h1 className="flex items-center">
            <img src={report} alt="" />
            <span className="ml-2"> Report</span>
          </h1>
          <MdOutlineNavigateNext className="mr-2 text-xl" />
        </button>
        <button className="flex justify-between items-center">
          <h1 className="flex items-center">
            <img src={humanResource} alt="" />
            <span className="ml-2"> Human Resource</span>
          </h1>
          <MdOutlineNavigateNext className="mr-2 text-xl" />
        </button>
        <button className="flex justify-between items-center">
          <h1 className="flex items-center">
            <img src={tax} alt="" />
            <span className="ml-2"> Tax</span>
          </h1>
          <MdOutlineNavigateNext className="mr-2 text-xl" />
        </button>
        <button className="flex justify-between items-center">
          <h1 className="flex items-center">
            <img src={service} alt="" />
            <span className="ml-2"> Service</span>
          </h1>
          <MdOutlineNavigateNext className="mr-2 text-xl" />
        </button>
        <button className="flex justify-between items-center">
          <h1 className="flex items-center">
            <img src={search} alt="" />
            <span className="ml-2"> Search</span>
          </h1>
          <MdOutlineNavigateNext className="mr-2 text-xl" />
        </button>
        <button className="flex justify-between items-center">
          <h1 className="flex items-center">
            <img src={setting} alt="" />
            <span className="ml-2"> Application Setting</span>
          </h1>
          <MdOutlineNavigateNext className="mr-2 text-xl" />
        </button>
        <button className="flex justify-between items-center">
          <h1 className="flex items-center">
            <img src={autoupdate} alt="" />
            <span className="ml-2"> Autoupdate</span>
          </h1>
          <MdOutlineNavigateNext className="mr-2 text-xl" />
        </button>
      </div>
    </div>
  );
};

export default SideNav;
