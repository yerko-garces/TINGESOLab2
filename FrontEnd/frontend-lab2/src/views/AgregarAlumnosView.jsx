import React from "react";
import './View.css';

function AgregarAlumnosView() {
  return (
    <div className="AgregarAlumnosView">
      <h1>Registrar alumnos</h1>
      <div className="contenedor">
      <form method="post" action="/agregarAlumno">
        <label htmlFor="rut">Rut:</label>
        <input type="text" id="rut" name="rut" required /><br />

        <label htmlFor="apellidoPaterno">Apellido Paterno:</label>
        <input type="text" id="apellidoPaterno" name="apellidoPaterno" required /><br />

        <label htmlFor="apellidoMaterno">Apellido Materno:</label>
        <input type="text" id="apellidoMaterno" name="apellidoMaterno" required /><br />

        <label htmlFor="primerNombre">Primer nombre:</label>
        <input type="text" id="primerNombre" name="primerNombre" required /><br />

        <label htmlFor="segundoNombre">Segundo nombre:</label>
        <input type="text" id="segundoNombre" name="segundoNombre" required /><br />

        <label htmlFor="nacimiento">Fecha de nacimiento(EJ: 01/01/2000):</label>
        <input type="date" id="nacimiento" name="nacimiento" required /><br />

        <label htmlFor="tipoColegioProcedencia">Tipo de colegio de procedencia:</label>
        <select id="tipoColegioProcedencia" name="tipoColegioProcedencia" required>
          <option value="Municipal">Municipal</option>
          <option value="Subvencionado">Subvencionado</option>
          <option value="Privado">Privado</option>
        </select><br />

        <label htmlFor="nombreColegio">Nombre del colegio en el que estudia o egreso:</label>
        <input type="text" id="nombreColegio" name="nombreColegio" required /><br />

        <label htmlFor="anioEgresoColegio">Año de egreso:</label>
        <input type="text" id="anioEgresoColegio" name="anioEgresoColegio" required /><br />

        <input type="submit" value="Agregar Alumno" />
      </form>
      </div>

      <h2></h2>
      <a href="/" >
        <button>Volver a inicio</button>
      </a>
    </div>
  );
}

export default AgregarAlumnosView;