import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Details from "../Pages/Details/Details";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



const router =createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: ()=> fetch("../events.json"),
            },
            {
                path:"/details/:id",
                element:<Details></Details>,
                loader: ()=> fetch("../events.json")
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    },
])
export default router;