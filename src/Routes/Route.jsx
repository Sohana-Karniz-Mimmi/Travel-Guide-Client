import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllPackages from "../Pages/AllPackages";
import PackageDetaiils from "../Pages/PackageDetails";
import GuideProfileDetails from "../Pages/GuideProfileDetails";
import TourTypeMatch from "../Pages/TourTypeMatch";
import DashboardLayout from "../Layouts/DashboardLayout";
import Statistics from "../Pages/Dashboard/Common/Statistics";
import AddPackage from "../Pages/AddPackage";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import MyAssignedTours from "../Pages/Dashboard/Admin/MyAssignedTours";
import Wishlists from "../Pages/Dashboard/Host/Wishlists";
import MyBookings from "../Pages/MyBookings";
import StoryDetail from "../Components/Stories/StoryDetail";
import AllStories from "../Components/Stories/AllStories";

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
        element: <AllPackages></AllPackages>
      },
      {
        path: "/packages-details/:id",
        element: <PackageDetaiils></PackageDetaiils>
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

      {
          path: "/stories/:id",
          element: <StoryDetail></StoryDetail>,
          // loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
      },
      {
          path: "/all-stories",
          element: <AllStories></AllStories>,
          // loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
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
          <AddPackage />
          // </HostRoute>

        ),
      },
      {
        path: 'wishlist',
        element: (
          // <HostRoute>
          <Wishlists />
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
          <MyBookings />

        ),
      },
      {
        path: 'my-assigned-tours',
        element: (
          // <AdminRoute>
          <MyAssignedTours />
          // </AdminRoute>

        ),
      },
    ],
  },
]);

export default router;