import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
