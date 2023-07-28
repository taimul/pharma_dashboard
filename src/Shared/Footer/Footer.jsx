import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex justify-center border py-4">
      <h1 className="flex items-center">
        Copyright@2023 Taimul, Design with{" "}
        <AiFillHeart className="text-red-400 mx-1" /> by
        <span className="font-semibold mx-1"> Powell Team</span>
      </h1>
    </div>
  );
};

export default Footer;
