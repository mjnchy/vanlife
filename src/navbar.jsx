import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar-main">
      <Link className="navbar-header">#VANLIFE</Link>
      <ul className="navbar-list">
        <Link className="navbar-li">About</Link>
        <Link className="navbar-li">Vans</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
