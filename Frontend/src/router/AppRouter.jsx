import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { AdminSidebar } from "../components/admin/AdminSidebar";
import { AllUserList } from "../components/admin/AllUserList";
import { UserNavbar } from "../components/user/UserNavbar";
import UserHome from "../components/user/UserHome";
import Dashboard from "../components/user/Dashboard";
import Profile from "../components/user/Profile";
import Settings from "../components/user/Settings";
import { CarDetail } from "../components/user/CarDetail";
import { CarList } from "../components/user/CarList";
import { GetApiDemo } from "../components/user/GetApiDemo";
import { UseEffectDemo } from "../components/user/UseEffectDemo";
import GetApiDemo2 from "../components/user/GetApiDemo2";
import { isAuthenticated } from "../utils/auth";

const RequireAuth = ({ children }) =>
  isAuthenticated() ? children : <Navigate to="/" replace />;

const RedirectIfAuth = ({ children }) =>
  isAuthenticated() ? <Navigate to="/user" replace /> : children;

const router = createBrowserRouter([
  { path: "/", element: <RedirectIfAuth><Login /></RedirectIfAuth> },
  { path: "/signup", element: <RedirectIfAuth><Signup /></RedirectIfAuth> },
  {
    path: "/sidebar",
    element: <RequireAuth><AdminSidebar /></RequireAuth>,
    children: [{ path: "userlist", element: <AllUserList /> }]
  },
  {
    path: "/user",
    element: <RequireAuth><UserNavbar /></RequireAuth>,
    children: [
      { index: true, element: <UserHome /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "profile", element: <Profile /> },
      { path: "settings", element: <Settings /> },
      { path: "getapidemo", element: <GetApiDemo /> },
      { path: "useeffectdemo", element: <UseEffectDemo /> },
      { path: "cardetail", element: <CarDetail /> },
      { path: "carlist", element: <CarList /> },
      { path: "getapidemo2", element: <GetApiDemo2 /> }
    ]
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;