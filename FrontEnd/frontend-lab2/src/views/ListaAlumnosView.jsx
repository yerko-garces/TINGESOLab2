import React from 'react';
import { Link } from 'react-router-dom';


const ListaAlumnosView = () => {
  return (
    <div>
      <h1>Preuniversitario TopEducation</h1>
      <nav>
        <ul>
          <li>
            
          </li>
          {/* Agrega más enlaces según sea necesario */}
        </ul>
      </nav>
      {/* Renderiza el componente ListaAlumnos en la ruta "/lista-alumnos" */}
      <ListaAlumnos />
    </div>
  );
};

export default ListaAlumnosView;
