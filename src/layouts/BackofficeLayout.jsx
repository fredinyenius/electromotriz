import { Outlet } from "react-router-dom";

const BackofficeLayout = () => {
  return (
    <div className="backoffice-layout">
      <aside className="sidebar">
        <h1>Dashboard</h1>
        <hr />
        <nav className="list">
          <a href="/mantenimiento/productos">Productos</a>
          <a href="/mantenimiento/reportes">Reporte de productos</a>
        </nav>
      </aside>
      <main style={{flex:'1 0 auto', minWidth: 0}}>
        <Outlet />
      </main>
    </div>
  );
};

export default BackofficeLayout;
