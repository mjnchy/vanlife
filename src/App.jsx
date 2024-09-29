import './styles.css';
import './server.js';
import Navbar from './components/navbar.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path={`/`} element={<Home />} />
          <Route path={`/about`} element={<About />} />
          <Route path={'/vans'} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
