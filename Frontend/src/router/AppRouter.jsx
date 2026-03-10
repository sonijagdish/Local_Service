import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { AdminSidebar } from "../components/admin/AdminSidebar";
import { AllUserList } from "../components/admin/AllUserList";
import { UserNavbar } from "../components/user/UserNavbar";
import { CarDetail } from "../components/user/CarDetail";
import { CarList } from "../components/user/CarList";
import { GetApiDemo } from "../components/user/GetApiDemo";
import { UseEffectDemo } from "../components/user/UseEffectDemo";
import GetApiDemo2 from "../components/user/GetApiDemo2";


const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    {
        path: "/sidebar",
        element: <AdminSidebar />,
        children: [
            { path: "userlist", element: <AllUserList /> }
        ]   
    },
    {
        path: "/user", element: <UserNavbar />,
        children: [
            { path: "getapidemo", element: <GetApiDemo /> },
            { path: "useeffectdemo", element: <UseEffectDemo /> },
            { path: "cardetail", element: <CarDetail /> },
            { path: "carlist", element: <CarList /> },
            { path: "getapidemo2", element: <GetApiDemo2/>}
        ]
    }
]);

const AppRouter = ()=>{
    return <RouterProvider router={router}/>
}
export default AppRouter