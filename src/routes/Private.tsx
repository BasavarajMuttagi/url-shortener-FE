import { Navigate, Outlet } from "react-router-dom";
import useBabyLink from "../store";

function Private() {
  const { token } = useBabyLink();
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Private;
