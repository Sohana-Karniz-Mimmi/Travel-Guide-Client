import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            
            // {
            //     path: "/job/:id",
            //     element: <PrivetRoute><ViewDetails></ViewDetails></PrivetRoute>,
            //     loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            // },
            // {
            //     path: "/update/:id",
            //     element: <PrivetRoute><Update></Update></PrivetRoute>,
            //     loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
            // },
        ]
    },
]);

export default router;