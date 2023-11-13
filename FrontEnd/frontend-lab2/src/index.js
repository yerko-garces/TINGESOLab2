import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AgregarAlumnosView from './views/AgregarAlumnosView.jsx';
import RecibirNotasView from './views/RecibirNotasView.jsx';
import BuscarParaPagarView from './views/BuscarParaPagarView.jsx';
import MostrarAlumnosView from './views/MostrarAlumnosView.jsx';
import CalcularCuotasView from './views/CalcularCuotasView.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/AgregarAlumnosView',
    element: <AgregarAlumnosView />,
  },
  {
    path: '/RecibirNotasView',
    element: <RecibirNotasView />,
  },
  {
    path: '/BuscarParaPagarView',
    element: <BuscarParaPagarView />,
  },
  {
    path: '/MostrarAlumnosView',
    element: <MostrarAlumnosView />,
  },
  {
    path: '/CalcularCuotasView',
    element: <CalcularCuotasView />,
  }
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

document.title = 'TopEducation';
