import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link className="header" id='title' to={'/'}>#VANLIFE</Link>
      <nav className="navbar">
        <ul className="nav-list">
          <NavLink className={({ isActive }) => isActive ? 'active nav-li' : 'nav-li'} to={'/host'}>Host</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'active nav-li' : 'nav-li'} to={'/about'}>About</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'active nav-li' : 'nav-li'} to={'/vans'}>Vans</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
