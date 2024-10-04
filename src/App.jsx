import './styles.css';
import './server.js';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vans from './pages/Vans.jsx';
import Details from './pages/Details.jsx';
import Dashboard from './pages/host/Dashboard.jsx';
import Income from './pages/host/Income.jsx';
import Review from './pages/host/Review.jsx';
import HostNav from './components/HostNav.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<Details />} />

          <Route path='host' element={<HostNav />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
