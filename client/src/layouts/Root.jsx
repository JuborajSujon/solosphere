import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      {/* nabar */}
      <Navbar />

      {/* content */}
      <div className="min-h-[calc(100vh-360px)]">
        <Outlet />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Root;
