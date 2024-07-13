import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Home/Login";
import Register from "../pages/Home/Register";
import AllCraftItems from "../pages/Home/AllCraftItems";
import AddCraftItem from "../pages/Home/AddCraftItem";
import MyCraftList from "../pages/Home/MyCraftList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
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
                element: <AllCraftItems></AllCraftItems>
            },
            {
                path: "/addcraft",
                element: <AddCraftItem></AddCraftItem>
            },
            {
                path: "/mycraft",
                element: <MyCraftList></MyCraftList>
            }
        ]
    }
])

export default router;