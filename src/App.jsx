import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./pages/home/home.jsx";
import About from "./pages/about/about.jsx";
import Vans from "./pages/vans/vans.jsx";
import Details from "./pages/details/details.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
