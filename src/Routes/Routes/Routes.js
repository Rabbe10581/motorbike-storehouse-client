import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main"
import Blog from "../../Pages/Blog/Blog";
import BrandsCategories from "../../Pages/BrandsCategories/BrandCategories/BrandsCategories";
import BrandProducts from "../../Pages/BrandsCategories/BrandProducts/BrandProducts";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
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
            // {
            //     path: '/brands',
            //     element: <BrandsCategories></BrandsCategories>
            // },

            {
                path: '/categories/:id',
                element: <BrandProducts></BrandProducts>,
                loader: ({ params }) => fetch(`https://resale-storehouse-server.vercel.app/categories/${params.id}`),
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

        ],
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/dashboard/myorders',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: '/dashboard/addproducts',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>
            },

        ]
    }
])

export default router;