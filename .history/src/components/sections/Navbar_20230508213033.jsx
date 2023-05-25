import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, setUser } = useAuth();
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          {user ?
            <button onClick={() => { setUser(false) }}>Logout</button>
            :
            <NavLink to="/login">Login</NavLink>
          }
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;