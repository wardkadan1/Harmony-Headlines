import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="page-container">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
