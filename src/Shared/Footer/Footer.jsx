import { AiFillHeart } from "react-icons/ai";
import { MdNavigateNext } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex text-sm">
      <div className="flex items-center w-20 ml-5 hidden lg:ml-10 lg:flex">
        <h1>Help info</h1>
        <span>
          <MdNavigateNext className="rotate-90" />
        </span>
      </div>
      <div className="flex justify-center py-4 w-full">
        <h1 className="flex items-center">
          Copyright@2023 Taimul, Design with{" "}
          <AiFillHeart className="text-red-400 mx-1" /> by
          <span className="font-semibold mx-1"> Powell Team</span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
