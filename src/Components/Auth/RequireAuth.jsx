import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function RequiredAuth({ allowedRoles }) {
  const { isLoggedIn, role } = useSelector((state) => state.auth);

  return allowedRoles && allowedRoles.find((myRole) => myRole == role) ? (
    <Outlet />
  ) : isLoggedIn ? (
    <Navigate to="/denied" />
  ) : (
    <Navigate to="/login" />
  );
}

export default RequiredAuth;
