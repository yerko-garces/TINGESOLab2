import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BuscarParaPagarView = () => {
  const [rut, setRut] = useState('');
  const [cuotas, setCuotas] = useState([]);
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Puedes agregar lógica adicional para cargar cuotas inicialmente si es necesario
  }, []); // Ajusta según sea necesario

  const handleBuscar = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:8092/cuota/buscarPorRut/${rut}`);

      if (response.ok) {
        const cuotasData = await response.json();

        if (cuotasData && cuotasData.length > 0) {
          setCuotas(cuotasData);
          setMostrarResultados(true);
        } else {
          console.warn('No se encontraron datos de cuotas.');
        }
      } else {
        console.error('Error al buscar alumno:', response.statusText);
      }
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
    }
  };

  const handlePagar = async (idCuota) => {
    try {
      const response = await fetch(`http://localhost:8092/cuota/pagarCuota/${idCuota}`, {
        method: 'POST',
      });

      if (response.ok) {
        console.log(`Cuota con ID ${idCuota} pagada correctamente.`);
        // Vuelve a cargar las cuotas después de realizar el pago
        const responseCuotas = await fetch(`http://localhost:8092/cuota/buscarPorRut/${rut}`);
        const cuotasData = await responseCuotas.json();

        if (cuotasData && cuotasData.length > 0) {
          setCuotas(cuotasData);
        }
      } else {
        console.error(`Error al pagar la cuota con ID ${idCuota}: ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Error al procesar la solicitud de pago para la cuota con ID ${idCuota}: ${error}`);
    }
  };

  return (
    <div>
      {mostrarResultados ? (
        <div>
          <h1>Detalles de las Cuotas</h1>
          {cuotas.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Rut del Alumno</th>
                  <th>Cantidad de cuotas</th>
                  <th>Monto mensual</th>
                  <th>Fecha de pago</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {cuotas.map((cuota, index) => (
                  <tr key={cuota.id_cuota}>
                    <td>{cuota.id_cuota}</td>
                    <td>{cuota.rut}</td>
                    <td>{cuota.c_cuotas}</td>
                    <td>{cuota.pago_mensual}</td>
                    <td>{cuota.f_pago}</td>
                    <td>{cuota.pagado ? 'Pagado' : 'Impago'}</td>
                    {index >= 0 && (
                      <td>
                        <button onClick={() => handlePagar(cuota.id_cuota)}>Pagar</button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No hay cuotas disponibles para mostrar.</p>
          )}
        </div>
      ) : (
        <div>
          <h1>Buscar alumno para pago</h1>
          <form onSubmit={handleBuscar}>
            <label htmlFor="rut">Rut:</label>
            <input
              type="text"
              id="rut"
              name="rut"
              value={rut}
              onChange={(e) => setRut(e.target.value)}
              required
            />
            <button type="submit">Buscar alumno</button>
          </form>
        </div>
      )}
      <a href="/">
        <button>Volver a inicio</button>
      </a>
    </div>
  );
};

export default BuscarParaPagarView;
