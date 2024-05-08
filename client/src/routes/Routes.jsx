import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Error</div>,
    children: [
      {
        index: true,
        element: <div>Home</div>,
      },
    ],
  },
]);

export default routes;
