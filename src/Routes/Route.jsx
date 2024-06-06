import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllTourists from "../Pages/AllTourists";
import Gallery from "../Pages/Gallery";
import GuideProfileDetails from "../Pages/GuideProfileDetails";
import TourTypeMatch from "../Pages/TourTypeMatch";
import DashboardLayout from "../Layouts/DashboardLayout";
import Statistics from "../Pages/Dashboard/Common/Statistics";
import AddJob from "../Pages/AddJob";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import BidRequests from "../Pages/Dashboard/Admin/BidRequests";
import ManageBookings from "../Pages/Dashboard/Host/ManageBookings";
// import MyBookings from "../Pages/Dashboard/Guest/MyBookings";
import MyListings from "../Pages/Dashboard/Host/MyListings";
import AppliedJobs from "../Pages/AppliedJobs";


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
      {
        path: "/all-packages",
        element: <AllTourists></AllTourists>
      },
      {
        path: "/packages-details/:id",
        element: <Gallery></Gallery>
      },
      {
        path: "/guide-profile-details/:id",
        element: <GuideProfileDetails></GuideProfileDetails>
      },
      {
        path: "/tour-type-match-package/:tourType",
        element: <TourTypeMatch></TourTypeMatch>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/tour-type/${params.tourType}`)
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
  {
    path: '/dashboard',
    element: (
      <DashboardLayout />
    ),
    children: [
      {
        index: true,
        element: (
          <Statistics />

        ),
      },
      {
        path: 'add-package',
        element: (
          // <HostRoute>
          <AddJob />
          // </HostRoute>

        ),
      },
      {
        path: 'wishlist',
        element: (
          // <HostRoute>
          <MyListings />
          // </HostRoute>

        ),
      },
      {
        path: 'manage-users',
        element: (
          // <AdminRoute>
          <ManageUsers />
          // </AdminRoute>

        ),
      },
      {
        path: 'my-bookings',
        element: (
          // <MyBookings />
          <AppliedJobs />

        ),
      },
      {
        // path: 'manage-bookings',
        element: (
          // <HostRoute>
          <ManageBookings />
          // </HostRoute>

        ),
      },
      {
        path: 'manage-bookings',
        element: (
          // <AdminRoute>
          <BidRequests />
          // </AdminRoute>

        ),
      },
      //   {
      //     path: 'profile',
      //     element: (
      //         <Profile />

      //     ),
      //   },
    ],
  },
]);

export default router;