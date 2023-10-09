import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Details from "../Pages/Details/Details";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivetRout from "../components/Routes/PrivetRout";
import About from "../Pages/About/About";
import Reviews from "../Pages/Reviews/Reviews";



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
                element:<PrivetRout><Details></Details></PrivetRout>,
                loader: ()=> fetch("../events.json")
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/about",
                element:<PrivetRout><About></About></PrivetRout>
            },
            
            {
                path:"/review",
                element:<PrivetRout><Reviews></Reviews></PrivetRout>
            },

        ]
    },
])
export default router;