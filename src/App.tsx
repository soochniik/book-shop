import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import Book from './pages/Book';
import AboutUs from './pages/AboutUs';
import Fest from './pages/Fest';
import Catalog from './pages/Catalog';
import { Header } from './components/header';
import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order/:bookId" element={<Order />} />
        <Route path="/book/:bookId" element={<Book />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/fest" element={<Fest />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
