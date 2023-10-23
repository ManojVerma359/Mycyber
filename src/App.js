import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gameplay from "./Components/Gameplay";
import CryptoStraps from "./Components/CryptoStraps ";
import Team from "./Components/Team";
import CyberFPS from "./Components/CyberFPS";
import Myaccordion from "./Components/Myaccordion";
import Solana from "./Components/Solana";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gameplay" element={<Gameplay />} />
          <Route path="/CyberFPS" element={<CyberFPS />} />
          <Route path="/CryptoStraps" element={<CryptoStraps />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Myaccordion" element={<Myaccordion />} />
          <Route path="/Solana" element={<Solana />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
