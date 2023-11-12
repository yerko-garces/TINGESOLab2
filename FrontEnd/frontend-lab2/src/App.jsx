import './App.css'
import Card from './components/Card';

function App() {
  return <div className='App'>
    <h1>Preuniversitario TopEducation</h1>
    <div className='contenedor'>
      <Card path="/AgregarAlumnosView" titulo="Agregar alumnos" descripcion="Espacio para agregar alumnos nuevos"/>
      <Card path="/AgregarAlumnosView" titulo="Lista de estudiantes" descripcion="Espacio donde se pueden observar a todos los estudiantes"/>
      <Card path="/AgregarAlumnosView" titulo="Agregar notas" descripcion="Espacio para ingresar archivo con las notas de los alumnos"/>
      <Card path="/AgregarAlumnosView" titulo="Resumen" descripcion="Resumen de cuotas y promedio de notas de alumnos"/>
    </div>

  </div>;
}

export default App
