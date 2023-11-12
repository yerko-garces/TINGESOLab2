import React from 'react';

const SubirArchivoNotas = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar el envío del archivo (aún no implementada)
    // Ejemplo: const formData = new FormData(event.target);
    //           fetch('https://tu-api.com/cargarArchivo', { method: 'POST', body: formData });
  };

  return (
    <div>
      <h1>Ingrese el archivo con las notas</h1>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <input type="file" name="archivo" />
        <button type="submit">Ingresar</button>
      </form>

      <h2></h2>
      <a href="/">
        <button>Volver a inicio</button>
      </a>
    </div>
  );
};

export default SubirArchivoNotas;
