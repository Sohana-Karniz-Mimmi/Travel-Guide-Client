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
import PrivetRoute from "./PrivetRoute";
import AdminRoute from "./AdminRoute";
import TourGuideRoute from "./TourGuideRoute";
import About from "../Pages/About";
import Blogs from "../Pages/Blogs";

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
        path: "community",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
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
        element: <PrivetRoute><PackageDetaiils></PackageDetaiils></PrivetRoute>
      },
      {
        path: "/guide-profile-details/:id",
        element: <PrivetRoute> <GuideProfileDetails></GuideProfileDetails> </PrivetRoute>
      },
      {
        path: "/tour-type-match-package/:tourType",
        element: <TourTypeMatch></TourTypeMatch>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/tour-type/${params.tourType}`)
      },

      {
        path: "/stories/:id",
        element: <StoryDetail></StoryDetail>
      },
      {
        path: "/all-stories",
        element: <AllStories></AllStories>
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
      // AdminRoute
      {
        path: 'add-package',
        element: (
          <PrivetRoute>
            <AdminRoute>
              <AddPackage />
            </AdminRoute>
          </PrivetRoute>

        ),
      },
      {
        path: 'manage-users',
        element: (
          <PrivetRoute>
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </PrivetRoute>

        ),
      },
      // Normal User Route
      {
        path: 'wishlist',
        element: (
          <Wishlists />

        ),
      },
      {
        path: 'my-bookings',
        element: (
          <MyBookings />
        ),
      },
      // TourGuideRoute
      {
        path: 'my-assigned-tours',
        element: (
          <PrivetRoute>
            <TourGuideRoute>
              <MyAssignedTours />
            </TourGuideRoute>
          </PrivetRoute>

        ),
      },
    ],
  },
]);

export default router;