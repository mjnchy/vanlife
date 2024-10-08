import { NavLink, Outlet } from "react-router-dom";

const HostNav = () => {
  return (
    <nav className='navbar host-nav'>
      <NavLink className={({ isActive }) => isActive ? 'nav-li active' : 'nav-li'} to={'/host'} end>Dashboard</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'nav-li active' : 'nav-li'} to={'/host/income'}>Income</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'nav-li active' : 'nav-li'} to={'/host/vans'}>Vans</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'nav-li active' : 'nav-li'} to={'/host/reviews'}>Reviews</NavLink>
    </nav>
  );
};

const HostLayout = () => {
  return (
    <>
      <HostNav />
      <Outlet />
    </>
  );
};

export default HostLayout;
