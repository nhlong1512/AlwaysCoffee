import { Routes, Route, } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import Coffee from './components/Coffee'
import Tea from './components/Tea'
import CakeAndSnack from './components/CakeAndSnack'
import Another from './components/Another'
import MenuChildren from './components/MenuChildren'
import InitMenu from './components/InitMenu'
import CartDetail from './components/CartDetail'
function App() {
  return (
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<InitMenu />} />
      <Route path="/coffee" element={<Coffee />} />
      <Route path="/tea" element={<Tea />} />
      <Route path="/cakeAndSnack" element={<CakeAndSnack />} />
      <Route path="/another" element={<Another />} />
      <Route path="/menuChildren" element={<MenuChildren />} />
      <Route path="/cartDetail" element={<CartDetail />} />
    </Routes>
  );
}

export default App;
