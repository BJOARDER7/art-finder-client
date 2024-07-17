import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Home/Login";
import Register from "../pages/Home/Register";
import AllCraftItems from "../pages/Nested/AllCraftItems";
import AddCraftItem from "../pages/Home/AddCraftItem";
import MyCraftList from "../pages/Home/MyCraftList";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/Home/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/craft')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/allcraft",
                element: <AllCraftItems></AllCraftItems>,
                loader: () => fetch('http://localhost:5000/craft')                
            },
            {
                path: "/addcraft",
                element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
            },
            {
                path: "/mycraft",
                element: <PrivateRoute><MyCraftList></MyCraftList></PrivateRoute>
            }
        ]
    }
])

export default router;