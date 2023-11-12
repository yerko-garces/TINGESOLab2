// ListaAlumnos.js
import React, { useEffect, useState } from 'react';

const ListaAlumnos = () => {
  const [alumnos, setAlumnos] = useState([]);

  return (
    <div>
      <h1>Lista de Alumnos</h1>
      <ul>
        {alumnos.map((alumno) => (
          <li key={alumno.rut}>
            <strong>RUT:</strong> {alumno.rut} <br />
            <strong>Apellido Paterno:</strong> {alumno.apellido_paterno} <br />
            <strong>Apellido Materno:</strong> {alumno.apellido_materno} <br />
            <strong>Primer Nombre:</strong> {alumno.primer_nombre} <br />
            <strong>Segundo Nombre:</strong> {alumno.segundo_nombre} <br />
            <strong>Fecha de Nacimiento:</strong> {alumno.nacimiento} <br />
            <strong>Tipo de Colegio de Procedencia:</strong> {alumno.tipo_colegio_procedencia} <br />
            <strong>Nombre del Colegio:</strong> {alumno.nombre_colegio} <br />
            <strong>Año de Egreso del Colegio:</strong> {alumno.año_egreso_colegio} <br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaAlumnos;
