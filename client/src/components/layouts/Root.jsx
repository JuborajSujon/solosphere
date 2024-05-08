import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      {/* nabar */}
      <h2 className="text-2xl">Navbar</h2>

      {/* content */}
      <Outlet />

      {/* footer */}
      <h2 className="text-2xl">Footer</h2>
    </div>
  );
};

export default Root;
