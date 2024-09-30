import './styles.css';
import './server.js';
import Navbar from './components/navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vans from './pages/Vans.jsx';
import Details from './pages/Details.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path={`/`} element={<Home />} />
          <Route path={`/about`} element={<About />} />
          <Route path={'/vans'} element={<Vans />} />
          <Route path={'/vans/:id'} element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
