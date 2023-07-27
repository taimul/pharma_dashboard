import { RiMenu4Fill } from "react-icons/ri";
const Header = ({ open, setOpen, nav, setNav }) => {
  return (
    <div className=" w-full py-5">
      <div className="hidden lg:block">
        <button onClick={() => setOpen(!open)}>
          <RiMenu4Fill className="text-xl" />
        </button>
      </div>
      <div className=" lg:hidden">
        <button onClick={() => setNav(!nav)}>
          <RiMenu4Fill className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Header;
