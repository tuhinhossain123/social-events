import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";



const router =createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
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