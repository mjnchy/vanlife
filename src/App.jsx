import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./pages/home/home.jsx";
import About from "./pages/about/about.jsx";
import Vans from "./pages/vans/vans.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
