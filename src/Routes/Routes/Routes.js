import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main"
import Blog from "../../Pages/Blog/Blog";
import BrandsCategories from "../../Pages/BrandsCategories/BrandCategories/BrandsCategories";
import BrandProducts from "../../Pages/BrandsCategories/BrandProducts/BrandProducts";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/Admin/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/Admin/AllSellers/AllSellers";
import ReportedProducts from "../../Pages/Dashboard/Admin/ReportedProducts/ReportedProducts";
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
            {
                path: '/categories',
                element: <BrandsCategories></BrandsCategories>
            },
            {
                path: '/categories/:brandName',
                element: <BrandProducts></BrandProducts>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.brandName}`),
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
            {
                path: '/dashboard/allbuyers',
                element: <PrivateRoute><AllBuyers></AllBuyers></PrivateRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <PrivateRoute><AllSellers></AllSellers></PrivateRoute>
            },
            {
                path: '/dashboard/reportedproducts',
                element: <PrivateRoute><ReportedProducts></ReportedProducts></PrivateRoute>
            },

        ]
    }
])

export default router;