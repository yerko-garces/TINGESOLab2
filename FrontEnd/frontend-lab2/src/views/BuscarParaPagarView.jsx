import React from 'react';

const BuscarPorRut = () => {
  const handleBuscar = (event) => {
    event.preventDefault();
    // Lógica para manejar la búsqueda por rut (aún no implementada)
    // Ejemplo: const formData = new FormData(event.target);
    //           fetch('https://tu-api.com/mostrarCuotasPorRut', { method: 'GET', body: formData });
  };

  return (
    <div>
      <h1>Busque por rut a la persona que desea hacerle el cobro</h1>
      <h2>Buscar:</h2>
      <div className='contenedor'>
      <form onSubmit={handleBuscar}>
        <label htmlFor="rut">Rut:</label>
        <input type="text" id="rut" name="rut" required /><br />
        <input type="submit" value="Buscar alumno" />
      </form>
      </div>
      <h2></h2>
      <a href="/">
        <button>Volver a inicio</button>
      </a>
    </div>
  );
};

export default BuscarPorRut;
