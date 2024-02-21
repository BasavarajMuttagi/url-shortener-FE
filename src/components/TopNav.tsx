import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/logo.png";
import { twMerge } from "tailwind-merge";
import { ElementRef, useRef, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import {
  FaUser,
  FaListAlt,
  FaHandsHelping,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import useBabyLink from "../store";
function TopNav() {
  const { logout } = useBabyLink();
  const [isShow, setIsShow] = useState(false);

  const showRef = useRef<ElementRef<"div">>(null);
  return (
    <div className="bg-white">
      <nav className="h-14 bg-white w-full  text-black flex justify-between items-center px-4 p-1 md:hidden">
        <div>
          <img
            src={logo}
            className="aspect-video h-10 border border-slate-900"
          />
        </div>
        <RxHamburgerMenu
          className="h-12 w-12 text-black"
          onClick={() => showRef.current?.focus()}
        />
      </nav>
      <div
        tabIndex={-1}
        ref={showRef}
        onClick={() => showRef.current?.blur()}
        className={twMerge(
          "font-gothic h-screen z-20 w-full bg-white absolute top-0 left-0 block duration-300 -translate-y-full  focus:duration-300 focus:translate-y-0"
        )}
      >
        <div className="w-full flex justify-end">
          <IoCloseOutline
            className="h-10 w-10 m-4"
            onClick={() => setIsShow(!isShow)}
          />
        </div>
        <div className="mt-10">
          <ul className="text-xl flex flex-col space-y-8 rounded-r-md px-10">
            <NavLink
              to={"/"}
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#14b8a6",
                    }
                  : { color: "" }
              }
            >
              <li className="flex items-center space-x-4 hover:cursor-pointer hover:text-teal-500">
                <AiFillHome className="h-6 w-6" /> <span>Home</span>
              </li>
            </NavLink>
            <li className="flex items-center space-x-4 hover:cursor-pointer hover:text-teal-500">
              <FaUser className="h-6 w-6" /> <span>Account</span>
            </li>
            <NavLink
              to={"/myurls"}
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#14b8a6",
                    }
                  : { color: "" }
              }
            >
              <li className="flex items-center space-x-4 hover:cursor-pointer hover:text-teal-500">
                <FaListAlt className="h-6 w-6" /> <span>My Short Urls</span>
              </li>
            </NavLink>
            <NavLink
              to={"/referers"}
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#14b8a6",
                    }
                  : { color: "" }
              }
            >
              <li className="flex items-center space-x-4 hover:cursor-pointer hover:text-teal-500">
                <FaHandsHelping className="h-6 w-6" /> <span>Referers</span>
              </li>
            </NavLink>
            <li className="flex items-center space-x-4 hover:cursor-pointer hover:text-teal-500">
              <IoSettingsSharp className="h-6 w-6" /> <span>Settings</span>
            </li>
            <li
              className="flex items-center space-x-4 hover:cursor-pointer hover:text-teal-500"
              onClick={() => logout()}
            >
              <FaSignOutAlt className="h-6 w-6" /> <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
