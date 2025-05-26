import MascotasList from "./MascotasList";
import Detail from "./Detail";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

function Mascotas() {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/4eb2d8431a0253f764dad867decc592038e80cac/mascotas.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setMascotas(data);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="mt-4 mb-3">Listado de mascotas</h2>
      <hr />
      <Routes>
        <Route path="/" element={<MascotasList mascotas={mascotas} />} />
        <Route path=":mascotaId" element={<Detail mascotas={mascotas} />} />
      </Routes>
    </div>
  );
}

export default Mascotas;
