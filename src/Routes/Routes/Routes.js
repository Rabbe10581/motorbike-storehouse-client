import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main"
import BrandsCategories from "../../Pages/BrandsCategories/BrandCategories/BrandsCategories";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/brands',
                element: <BrandsCategories></BrandsCategories>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            // {
            //     path: '/dashboard/myorder',
            //     element: <Dashboard></Dashboard>
            // },

        ]
    }
])

export default router;