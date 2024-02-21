import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
function SideNav() {
  return (
    <nav className="hidden  md:flex md:max-w-[280px] font-gothic h-[100%]  w-full bg-white shrink-0 drop-shadow-lg">
      <div className="mt-24">
        <ul className="text-xl flex flex-col  px-4 space-y-8 rounded-r-md">
          <NavLink to={"/"}>
            <li className="flex items-center space-x-4 hover:cursor-pointer hover:text-teal-500">
              <AiFillHome className="h-6 w-6" /> <span>Home</span>
            </li>
          </NavLink>
          <li className="flex items-center space-x-4 hover:cursor-pointer hover:text-teal-500">
            <FaUser className="h-6 w-6" /> <span>Account</span>
          </li>
          <NavLink to={"/myurls"}>
            <li className="flex items-center space-x-4 hover:cursor-pointer hover:text-teal-500">
              <FaListAlt className="h-6 w-6" /> <span>My Short Urls</span>
            </li>
          </NavLink>
          <NavLink to={"/referers"}>
            <li className="flex items-center space-x-4 hover:cursor-pointer hover:text-teal-500">
              <FaHandsHelping className="h-6 w-6" /> <span>Referers</span>
            </li>
          </NavLink>
          <li className="flex items-center space-x-4 hover:cursor-pointer hover:text-teal-500">
            <IoSettingsSharp className="h-6 w-6" /> <span>Settings</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SideNav;
