import React, { useState } from 'react';
import './componente.css'; // Agregamos un archivo CSS para los estilos

const TuComponente = () => {
  const [rut, setRut] = useState('');
  const [tipoColegio, setTipoColegio] = useState('');
  const [puntuacion, setPuntuacion] = useState('');
  const [cuotasSeleccionadas, setCuotasSeleccionadas] = useState('');
  const [montoInicial, setMontoInicial] = useState(null);
  const [cuotasSimuladas, setCuotasSimuladas] = useState('');
  const [montoSimulado, setMontoSimulado] = useState('');

  const handleInputChange = (event) => {
    setRut(event.target.value);
  };

  const obtenerTipoColegio = async () => {
    try {
      const response = await fetch(`http://localhost:8091/alumno/tipoColegio/${rut}`);
      const data = await response.text();
      console.log('Respuesta del servidor:', data);

      // Actualiza el estado con el tipo de colegio obtenido
      setTipoColegio(data);

      // Asigna la puntuación según el tipo de colegio
      switch (data) {
        case 'Municipal':
          setPuntuacion('10');
          break;
        case 'Subvencionado':
          setPuntuacion('7');
          break;
        case 'Privado':
          setPuntuacion('4');
          break;
        default:
          setPuntuacion('');
          break;
      }

      // Hacer una nueva llamada para obtener el monto inicial
      const montoResponse = await fetch(`http://localhost:8091/alumno/montoInicial/${rut}`);
      const montoData = await montoResponse.json();
      console.log('Monto Inicial:', montoData);
      setMontoInicial(montoData);

    } catch (error) {
      console.error('Error al obtener el tipo de colegio', error);
      // Puedes manejar el error de una manera específica si es necesario
    }
  };

  const handleCuotasSeleccionadasChange = (event) => {
    setCuotasSeleccionadas(event.target.value);
  };

  const generarListaCuotas = () => {
    const limite = parseInt(puntuacion, 10);
    const opciones = Array.from({ length: limite }, (_, index) => index + 1);
    return opciones.map((opcion) => (
      <option key={opcion} value={opcion}>
        {opcion}
      </option>
    ));
  };

  const handleSimular = async () => {
    const cuotas = parseInt(cuotasSeleccionadas, 10);
    const montoTotal = parseFloat(montoInicial);
    const montoPorCuota = cuotas > 0 ? montoTotal / cuotas : 0;

    setCuotasSimuladas(cuotas);
    setMontoSimulado(montoPorCuota.toFixed(2));
  };

  const handleAceptar = async () => {
    try {
      const response = await fetch(`http://localhost:8092/cuota/generarCuotas/${rut.toString()}/${cuotasSimuladas}/${montoSimulado}`, {
        method: 'POST',
      });
  
      if (response.ok) {
        console.log('Cuotas generadas correctamente.');
        // Puedes realizar acciones adicionales si es necesario
      } else {
        const errorText = await response.text();
        console.error('Error al generar cuotas:', errorText);
        // Puedes manejar el error de una manera específica si es necesario
      }
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
      // Puedes manejar el error de una manera específica si es necesario
    }
  };

  return (
    <div>
      <h1>Creación de cuotas para alumnos nuevos</h1>
      <div className="center-container">
        <label htmlFor="rut">RUT:</label>
        <input type="text" id="rut" value={rut} onChange={handleInputChange} />
        <button onClick={obtenerTipoColegio}>Obtener Tipo de Colegio</button>

        {tipoColegio && (
          <div>
            <p>Tipo de Colegio: {tipoColegio}</p>
            <p>El alumno puede optar a un máximo de {puntuacion} cuotas</p>
          </div>
        )}

        {montoInicial !== null && (
          <div>
            <p>Monto Inicial: {montoInicial}</p>
          </div>
        )}

        {puntuacion && (
          <div>
            <label htmlFor="cuotasSeleccionadas">Cuotas a aceptar:</label>
            <select
              id="cuotasSeleccionadas"
              value={cuotasSeleccionadas}
              onChange={handleCuotasSeleccionadasChange}
            >
              {generarListaCuotas()}
            </select>
          </div>
        )}

        <div>
          <button onClick={handleSimular}>Simular</button>
          <button onClick={handleAceptar}>Aceptar</button>
        </div>

        {cuotasSimuladas !== '' && (
          <div>
            <p>Cuotas Simuladas: {cuotasSimuladas}</p>
            <p>Monto por Cuota: {montoSimulado}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TuComponente;
