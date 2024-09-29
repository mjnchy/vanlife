import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <Link className="header" id='title' to={'/'}>#VANLIFE</Link>
        <nav className="navbar">
          <ul className="nav-list">
            <Link className="nav-li" to={'/about'}>About</Link>
            <Link className="nav-li" to={'/vans'}>Vans</Link>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
