import { Link, Outlet } from "react-router-dom";

const HostNav = () => {
  return (
    <>
      <nav className='navbar host-nav'>
        <Link className='nav-li' to={'/host'}>Dashboard</Link>
        <Link className='nav-li' to={'/host/income'}>Income</Link>
        <Link className='nav-li' to={'/host/reviews'}>Reviews</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default HostNav;
