import React, { useEffect, useState } from 'react';
import './tablas.css';

const ListaAlumnos = () => {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    const obtenerAlumnos = async () => {
      try {
        const response = await fetch('http://localhost:8091/alumno/todos');
        if (response.ok) {
          const data = await response.json();
          setAlumnos(data);
        } else {
          console.error('Error al obtener la lista de alumnos');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };

    obtenerAlumnos();
  }, []); // El segundo parámetro [] asegura que useEffect se ejecute solo una vez al montar el componente

  if (alumnos.length === 0) {
    return <div>No hay alumnos registrados</div>;
  }

  const columnNames = Object.keys(alumnos[0]);

  return (
    <div>
      <h1>Lista de Alumnos</h1>
      <div className='contenedor'>
        <table>
          <thead>
            <tr>
              {columnNames.map((columnName) => (
                <th key={columnName}>{columnName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno, index) => (
              <tr key={index}>
                {columnNames.map((columnName) => (
                  <td key={columnName}>{alumno[columnName]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2></h2>
      <a href="/">
        <button>Volver a inicio</button>
      </a>
    </div>

  );
};

export default ListaAlumnos;
