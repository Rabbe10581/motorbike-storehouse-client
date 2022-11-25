import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import BrandsCategories from "../../Pages/BrandsCategories/BrandCategories/BrandsCategories";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
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
        ]
    }
])

export default router;