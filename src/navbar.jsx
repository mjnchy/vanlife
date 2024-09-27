import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar-main">
      <Link to={"/"} className="navbar-header">#VANLIFE</Link>
      <ul className="navbar-list">
        <Link to={"/about"} className="navbar-li">About</Link>
        <Link to={"/vans"} className="navbar-li">Vans</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
