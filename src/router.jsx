import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Inicio from "./views/Inicio";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./views/Auth/Login"
import Register from "./views/Auth/Register"
import ForgotPassword from "./views/Auth/ForgotPassword";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./views/admin/Dashboard";
import Pedidos from "./views/admin/Pedidos";
import HistorialPedidos from "./views/admin/HistorialPedidos";
import Categorias from "./views/admin/Categorias";
import Platillos from "./views/admin/Platillos";
import QR from "./views/admin/QR";
import Configuracion from "./views/admin/Configuracion";

const router = createBrowserRouter([
  {
    path: '/:mesaLink?',
    element: <Layout/>,
    children: [
      {index: true, element: <Inicio/>}
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout/>,
    children : [
      { index: true, element: <Login/> },
      { path: '/auth/register', element: <Register/>},
      { path: '/auth/forgotpassword', element: <ForgotPassword/>}
    ]
  },
  {
    path: '/dashboard',
    element: <AdminLayout/>,
    children : [
      { index: true, element: <Dashboard/> },
      { path: '/dashboard/pedidos', element: <Pedidos/> },
      { path: '/dashboard/pedidos/historial', element: <HistorialPedidos/> },
      { path: '/dashboard/categorias', element: <Categorias/> },
      { path: '/dashboard/platillos', element: <Platillos/>},
      { path: '/dashboard/qr', element: <QR/> },
      { path: '/dashboard/configuracion', element: <Configuracion/> }
    ]
  },
]);

export default router