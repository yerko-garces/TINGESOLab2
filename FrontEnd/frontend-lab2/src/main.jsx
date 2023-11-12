import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AgregarAlumnosView from './views/AgregarAlumnosView.jsx';
import RecibirNotasView from './views/RecibirNotasView.jsx';
import ListaAlumnosView from './views/ListaAlumnosView.jsx';
import BuscarParaPagarView from './views/BuscarParaPagarView.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/AgregarAlumnosView",
    element: <AgregarAlumnosView />
  },
  {
    path: "/ListaAlumnosView",
    element: <ListaAlumnosView />
  },
  {
    path: "/RecibirNotasView",
    element: <RecibirNotasView />
  },
  {
    path: "/BuscarParaPagarView",
    element: <BuscarParaPagarView />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

document.title = "TopEducation";