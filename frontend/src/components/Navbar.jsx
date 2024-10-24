import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-3 p-3 shadow-sm lg:flex-row shadow-slate-300">
      <div className="hidden font-bold text-center w-52 lg:block">
        <span className="text-violet-600">QUICK</span>
        <span className="text-green-600 "> SHOP</span>
      </div>
      <div className="flex items-center justify-between w-full px-3">
        <div className="">
          <p className="text-xl font-bold sm:text-2xl">
            Delivery in 15 minutes
          </p>
          <p className="text-xs ">Address</p>
        </div>
        <Link to="/admin" className="text-2xl text-black/60">
          <CgProfile />
        </Link>
      </div>
      <div className="flex items-center text-xs sm:text-base w-full p-1 rounded-lg lg:w-[500px] bg-slate-100">
        <p className="p-1 text-xl">
          <CiSearch />
        </p>
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 rounded-lg outline-none bg-slate-100"
        />
      </div>
      <div className="items-center justify-center hidden gap-2 px-2 py-3 font-bold text-white bg-green-600 rounded-md lg:flex w-52">
        <div className="text-2xl">
          <IoCartOutline />
        </div>
        <div className="">My Cart</div>
      </div>
    </div>
  );
};

export default Navbar;
