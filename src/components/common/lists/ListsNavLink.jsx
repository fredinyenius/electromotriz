import { NavLink } from "react-router-dom";

const ListsNavLink = ({ className = '', handleClickList = () => { }, handleClickNavLink = () => { } }) => {
  return (
    <ul
      className={`list ${className}`}
      onClick={handleClickList}
    >
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
          onClick={handleClickNavLink}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/productos"
          className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
          onClick={handleClickNavLink}
        >
          Productos
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to="/servicios"
          className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
          onClick={handleClickNavLink}
        >
          Servicios
        </NavLink>
      </li> */}
      <li>
        <NavLink
          to="/carrito"
          className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
          onClick={handleClickNavLink}
        >
          carrito
        </NavLink>
      </li>
    </ul>
  );
};

export default ListsNavLink;