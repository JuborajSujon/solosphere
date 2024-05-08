import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Error</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/add-job",
        element: <AddJob />,
      },
    ],
  },
]);

export default routes;
