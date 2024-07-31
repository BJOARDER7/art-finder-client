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
import DetailsPage from "../pages/Nested/DetailsPage";
import UpdatePage from "../pages/Nested/UpdatePage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://art-finder-server.vercel.app/craft')
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
                loader: () => fetch('https://art-finder-server.vercel.app/craft')                
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
                loader: ({params}) => fetch(`https://art-finder-server.vercel.app/craft/${params.id}`)
            },
            {
                path: "/addcraft",
                element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
            },
            {
                path: "/mycraft",
                element: <PrivateRoute><MyCraftList></MyCraftList></PrivateRoute>,
                loader: () => fetch('https://art-finder-server.vercel.app/craft')
            },
            {
                path: "/mycraft/:id",
                element: <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
                loader: ({params}) => fetch(`https://art-finder-server.vercel.app/craft/${params.id}`)
            }
           
        ]
    }
])

export default router;