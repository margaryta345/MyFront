import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuth } from "./redux/slices/auth";
const PrivateRoutes = () => {
  const isAuth = useSelector(selectIsAuth);
  return isAuth || window.localStorage.getItem("token") ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
export default PrivateRoutes;
