import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      {/* nabar */}
      <Navbar />

      {/* content */}
      <Outlet />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Root;
