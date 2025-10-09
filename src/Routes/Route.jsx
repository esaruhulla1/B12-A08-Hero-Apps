import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage404 from "../ErrorPage/ErrorPage404";
import ErrorApp from "../ErrorPage/ErrorApp";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage404></ErrorPage404>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/allapps',
        Component: AllApps,
        
      },
      {
        path: '/installation',
        Component: Installation
      },
      {
        path: '/allapps/:id',
        Component: AppDetails
      },
    ]
   
  },
]);

export default router