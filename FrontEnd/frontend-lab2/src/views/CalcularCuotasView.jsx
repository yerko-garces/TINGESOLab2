// Frontend
import React, { useState } from "react";

function CalcularCuotasView() {
  const [rut, setRut] = useState("");
  const [tipoColegio, setTipoColegio] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch(`/alumno/tipoColegio/${rut}`);
      const data = await response.text(); // Usa response.text() para obtener el texto directamente
  
      if (response.ok) {
        setTipoColegio(data); // El tipo de colegio es un texto directo
        setError(null); // Limpiar el error en caso de éxito
      } else {
        console.error("Error en la respuesta del servidor:", response.status);
        setError("Error al obtener el tipo de colegio");
      }
    } catch (error) {
      console.error("Error de red:", error);
      setError("Error de red. Por favor, inténtelo de nuevo.");
    }
  };
  

  return (
    <div>
      <h1>Buscar por Rut a la persona que desea hacerle las cuotas</h1>
      <div className="contenedor">
        <form onSubmit={handleSubmit}>
          <label htmlFor="rut">Rut:</label>
          <input
            type="text"
            id="rut"
            name="rut"
            required
            value={rut}
            onChange={(e) => setRut(e.target.value)}
          />
          <br />
          <input type="submit" value="Buscar alumno" />
        </form>
      </div>
      {error && <p>{error}</p>}
      {tipoColegio && (
        <div>
          <h2>
            {tipoColegio.includes("Municipal") && "La cantidad de cuotas posibles son 10"}
            {tipoColegio.includes("Subvencionado") && "La cantidad de cuotas posibles son 7"}
            {tipoColegio.includes("Privado") && "La cantidad de cuotas posibles son 4"}
          </h2>
        </div>
      )}
      <div>
        {/* No hay contenido en esta sección */}
        <h2></h2>
        <a href="/">
          <button>Volver a inicio</button>
        </a>
      </div>
    </div>
  );
}

export default CalcularCuotasView;
