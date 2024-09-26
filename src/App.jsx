import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./pages/home/home.jsx";
import About from "./pages/about/about.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
