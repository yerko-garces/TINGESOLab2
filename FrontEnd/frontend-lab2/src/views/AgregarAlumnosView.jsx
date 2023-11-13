import React from "react";
import "./View.css";

function AgregarAlumnosView() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jsonData = {};

    // Convertir FormData a un objeto JSON
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    try {
      const response = await fetch("http://localhost:8091/alumno/agregarAlumno", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });

      if (response.ok) {
        console.log("Alumno agregado correctamente");
        window.alert("Alumno agregado correctamente: Recuerde crear las cuotas del nuevo alumno");
      } else {
        console.error("Error al agregar alumno");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <div className="AgregarAlumnosView">
      <h1>Registrar alumnos</h1>
      <div className="contenedor">
        <form onSubmit={handleSubmit}>

          <label htmlFor="rut">Rut:</label>
          <input type="text" id="rut" name="rut" required /><br />

          <label htmlFor="apellido_paterno">Apellido Paterno:</label>
          <input type="text" id="apellido_paterno" name="apellido_paterno" required /><br />

          <label htmlFor="apellido_materno">Apellido Materno:</label>
          <input type="text" id="apellido_materno" name="apellido_materno" required /><br />

          <label htmlFor="primer_nombre">Primer nombre:</label>
          <input type="text" id="primer_nombre" name="primer_nombre" required /><br />

          <label htmlFor="segundo_nombre">Segundo nombre:</label>
          <input type="text" id="ssegundo_nombre" name="segundo_nombre" required /><br />

          <label htmlFor="nacimiento">Fecha de nacimiento(EJ: 01/01/2000):</label>
          <input type="date" id="nacimiento" name="nacimiento" required /><br />

          <label htmlFor="tipo_colegio_procedencia">Tipo de colegio de procedencia:</label>
          <select id="ipo_colegio_procedencia" name="tipo_colegio_procedencia" required>
            <option value="Municipal">Municipal</option>
            <option value="Subvencionado">Subvencionado</option>
            <option value="Privado">Privado</option>
          </select><br />

          <label htmlFor="nombre_colegio">Nombre del colegio en el que estudia o egreso:</label>
          <input type="text" id="nombre_colegio" name="nombre_colegio" required /><br />

          <label htmlFor="anio_egreso_colegio">Año de egreso:</label>
          <input type="text" id="anio_egreso_colegio" name="anio_egreso_colegio" required /><br />

          <input type="submit" value="Agregar Alumno" />
        </form>
      </div>

      <h2></h2>
      <a href="/">
        <button>Volver a inicio</button>
      </a>
    </div>
  );
}

export default AgregarAlumnosView;