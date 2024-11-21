//style
import "./MainLayout.css";
// rrd imports
import { NavLink, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default MainLayout;
