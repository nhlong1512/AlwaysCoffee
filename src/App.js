import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import Coffee from './components/Coffee'
import Footer from './components/Footer'

function App() {
  return (
    <Routes>
      <Route path="/coffee" element={<Coffee />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
