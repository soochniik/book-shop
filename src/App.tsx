import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import Book from './pages/Book';
import AboutUs from './pages/AboutUs';
import Fest from './pages/Fest';
import { Header } from './components/header';
import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/book" element={<Book />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/fest" element={<Fest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
