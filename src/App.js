import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mascotas from "./Mascotas";
import Detail from "./Detail";
import NavBar from "./Navbar";

function App() {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/4eb2d8431a0253f764dad867decc592038e80cac/mascotas.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => setMascotas(data));
  }, []);

  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path="/" element={<Mascotas mascotas={mascotas} />} />
        <Route path="/mascotas" element={<Mascotas />} />
        <Route path="/mascotas/:mascotaId" element={<Detail mascotas={mascotas} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
