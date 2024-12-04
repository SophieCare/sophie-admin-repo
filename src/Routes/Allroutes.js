import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Forgot from "../Auth/Forgot";
import Login from "../Auth/Login";
import Verify from "../Auth/Verify";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import Landing from "../Pages/Landing";
import Dashboard from "../Pages/SidebarPages/Dashboard/Dashboard";
import DriverListing from "../Pages/SidebarPages/DriverListing/DriverListing";
import UserListing from "../Pages/SidebarPages/UserListing/UserListing";

function PublicRoute({ isAuthenticated }) {
  if (isAuthenticated) return <Navigate to="/landing/dashboard" replace />;
  return <Outlet />;
}

function PrivateRoute({ isAuthenticated }) {
  if (!isAuthenticated) return <Navigate to="/" replace />;
  return <Outlet />;
}

export default function GaspilRoutes() {
  const isAutharised = useSelector((state) => state?.Authlogin?.data?.token);
  console.log(isAutharised, "isAutharised");
  const token = isAutharised;
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute isAuthenticated={token} />}>
          <Route element={<Login />} path="/" />
          <Route element={<Verify />} path="verify" />
          <Route element={<Forgot />} path="/forgot" />
        </Route>
        <Route element={<PrivateRoute isAuthenticated={token} />}>
          <Route element={<Landing />} path="/landing">
            <Route element={<Dashboard />} path="/landing/dashboard" />
            <Route element={<DriverListing />} path="/landing/driver" />
            <Route element={<UserListing />} path="/landing/user" />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
