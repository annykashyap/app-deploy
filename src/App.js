import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./compo/Home";
import Header from "./compo/Header";
import Coins from "./compo/Coins";
import Exchanges from "./compo/Exchanges";
import CoinDetails from "./compo/CoinDetails";
import Footer from "./compo/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
