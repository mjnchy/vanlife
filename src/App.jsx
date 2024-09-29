import './styles.css';
import './server.js';
import Home from './pages/home.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path={`/`} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
