import { useParams } from "react-router-dom";

export default function Detail({ mascotas }) {
  const params = useParams();
  const mascotaFiltrada = mascotas.filter(
    (m) => String(m.id) === String(params.mascotaId)
  );

  if (mascotaFiltrada.length === 0) {
    return <h2>Mascota no encontrada</h2>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      {mascotaFiltrada.map((mascota) => (
        <div key={mascota.id}>
          <h1>{mascota.nombre}</h1>
          <img
            src={mascota.foto}
            alt={mascota.nombre}
            style={{ width: "500px", borderRadius: "12px" }}
          />
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{mascota.raza}</p>
        </div>
      ))}
    </div>
  );
}
