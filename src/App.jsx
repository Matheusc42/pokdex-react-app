import "./App.css";
import Home from "./Pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokeDetailPage from "./Pages/PokeDetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedetails/:id" element={<PokeDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
