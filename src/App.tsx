import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import Book from './pages/Book'
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
      </Routes>
    </BrowserRouter>
  );
}

export default App
