import { createBrowserRouter } from "react-router-dom";
import Login from "../../Pages/Login";
import Main from "../layout/Main";
import Register from "../../Pages/Register";
import Third from "../layout/Third";
import Profile from "../layout/Profile";
import Booking from "../layout/Booking";
import Confirm from "../../Pages/Confirm";
import PrivateRoute from "../../Pages/PrivateRoute";
import Destination from "../../Pages/Destination";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        loader: ()=> fetch("https://travel-guru-server-nicchy123.vercel.app/hotels")
    },
    {
        path: '/destination',
        element: <Destination/>,
        loader: ()=> fetch("https://travel-guru-server-nicchy123.vercel.app/hotels")
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/moredetails',
        element: <Third/>
    },
    {
        path: '/profile',
        element: <Profile/>
    },
    {
        path: 'booking/:id/confirm/:id',
        loader: ({params})=> fetch(`https://travel-guru-server-nicchy123.vercel.app/hotels/${params.id}`),
        element: <PrivateRoute><Confirm/></PrivateRoute> 
    },
    {
        path: '/booking/:id',
        loader: ({params})=> fetch(`https://travel-guru-server-nicchy123.vercel.app/hotels/${params.id}`),
        element: <Booking/>
    }

])