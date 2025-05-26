import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./MascotasList.css";

const MascotasList = ({ mascotas }) => {
  return (
    <div className="mascotas-container">
      {mascotas.map((mascota) => (
        <Card className="mascota-card mb-4" key={mascota.id}>
  <div className="mascota-img-container">
    <img
      className="mascota-img"
      src={mascota.foto}
      alt={`foto de ${mascota.nombre}`}
    />
  </div>
  <Card.Body>
    <Card.Title>
      <Link to={`/mascotas/${mascota.id}`}>{mascota.nombre}</Link>
    </Card.Title>
    <Card.Text>
      <strong>Especie:</strong> {mascota.especie}
      <br />
      <strong>Raza:</strong> {mascota.raza}
      <br />
      {mascota.descripcion}
    </Card.Text>
  </Card.Body>
</Card>

      ))}
    </div>
  );
};

export default MascotasList;
