import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";

function BasePage() {
  return (
    <div className="bg-[#211C6A] h-screen flex selection:bg-blue-600">
      <SideNav />
      <Outlet />
    </div>
  );
}

export default BasePage;
