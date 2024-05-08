import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div>
      {/* nabar */}
      <Navbar />

      {/* content */}
      <Outlet />

      {/* footer */}
      <h2 className="text-2xl">Footer</h2>
    </div>
  );
};

export default Root;
