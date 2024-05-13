import { Outlet } from "react-router-dom";
import Aside from "./Aside";

function Layout() {
  return (
    <div className="flex">
      <Aside />
      <main className="flex-1 h-screen p-4 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
