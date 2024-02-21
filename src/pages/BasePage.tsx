import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";

function BasePage() {
  return (
    <div className="bg-[#211C6A] h-screen  selection:bg-blue-600 flex flex-col md:flex-row">
      <TopNav />
      <SideNav />
      <Outlet />
    </div>
  );
}

export default BasePage;
