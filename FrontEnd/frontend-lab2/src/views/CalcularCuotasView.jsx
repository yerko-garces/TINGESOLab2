import React, { useState } from 'react';

const Cuotas = () => {
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);
  const [resultadoCantidad, setResultadoCantidad] = useState('');
  const [resultado, setResultado] = useState('');
  const [cantidadOficial, setCantidadOficial] = useState('');

  const handleCantidadChange = (e) => {
    setCantidadSeleccionada(e.target.value);
  };

  const handleCalcular = (e) => {
    e.preventDefault();
    // Lógica para calcular resultadoCantidad aquí
    // Ejemplo: setResultadoCantidad("Resultado de cantidad");
  };

  const handleAceptarCuotas = (e) => {
    e.preventDefault();
    // Lógica para manejar la aceptación de cuotas aquí
    // Ejemplo: setResultado("Resultado final");
  };

  return (
    <div>
      <h1>Cuotas</h1>

      <p>{resultadoCantidad}</p>

      <form onSubmit={handleCalcular}>
        <select name="cantidad" value={cantidadSeleccionada} onChange={handleCantidadChange}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button type="submit">Calcular</button>
      </form>

      <h2>Monto previo por cuota:</h2>
      <p>{resultado}</p>

      <h2>Luego de ver las opciones, ¿con cuántas cuotas se quedará?:</h2>
      <form onSubmit={handleAceptarCuotas}>
        <label htmlFor="cantidadOficial">Ingrese cantidad:</label>
        <input
          type="text"
          id="cantidadOficial"
          name="cantidadOficial"
          value={cantidadOficial}
          onChange={(e) => setCantidadOficial(e.target.value)}
          required
        />
        <button type="submit">Aceptar</button>
      </form>
    </div>
  );
};

export default Cuotas;
