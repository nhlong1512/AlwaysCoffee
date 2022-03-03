import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import Coffee from './components/Coffee'
import Tea from './components/Tea'
import CakeAndSnack from './components/CakeAndSnack'
import Another from './components/Another'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coffee" element={<Coffee />} />
      <Route path="/tea" element={<Tea />} />
      <Route path="/cakeAndSnack" element={<CakeAndSnack />} />
      <Route path="/another" element={<Another />} />
    </Routes>
  );
}

export default App;
