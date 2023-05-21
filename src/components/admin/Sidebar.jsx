import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_API_URL;

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [path, setPath] = useState("");

  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname;
    setPath(pathName);
  }, [location]);

  return (
<div className={`transition duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700 `}>
      <div
        // id="application-sidebar"
        className=" fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="px-6">
          <Link
            className="flex-none text-xl font-semibold dark:text-white"
            to="/dashboard"
            aria-label="Brand"
          >
            Brand
          </Link>
        </div>

        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            <li>
              <Link
                onClick={toggleSidebar}
                className={`${
                  path === "/dashboard"
                    ? "bg-blue-500 text-white hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-900 dark:text-white "
                    : " bg-white dark:bg-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900"
                } flex items-center gap-x-3.5 py-2  px-2.5  text-sm text-slate-700 rounded-md `}
                to="/dashboard"
              >
                <span className="material-symbols-rounded">dashboard</span>
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                onClick={toggleSidebar}
                className={`${
                  path === "/dashboard/pedidos"
                    ? "bg-blue-500 text-white hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-900 dark:text-white "
                    : " bg-white dark:bg-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900"
                } flex items-center gap-x-3.5 py-2  px-2.5  text-sm text-slate-700 rounded-md `}
                to="/dashboard/pedidos"
              >
                <span className="material-symbols-rounded">notifications</span>
                Pedidos
              </Link>
            </li>

            <li>
              <Link
                onClick={toggleSidebar}
                className={`${
                  path === "/dashboard/pedidos/historial"
                    ? "bg-blue-500 text-white hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-900 dark:text-white "
                    : " bg-white dark:bg-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900"
                } flex items-center gap-x-3.5 py-2  px-2.5  text-sm text-slate-700 rounded-md `}
                to="/dashboard/pedidos/historial"
              >
                <span className="material-symbols-rounded">menu_book</span>
                Historial de Pedidos
              </Link>
            </li>

            <li>
              <Link
                onClick={toggleSidebar}
                className={`${
                  path === "/dashboard/categorias"
                    ? "bg-blue-500 text-white hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-900 dark:text-white "
                    : " bg-white dark:bg-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900"
                } flex items-center gap-x-3.5 py-2  px-2.5  text-sm text-slate-700 rounded-md `}
                to="/dashboard/categorias"
              >
                <span className="material-symbols-rounded ">
                  format_list_bulleted
                </span>
                Categorias
              </Link>
            </li>

            <li>
              <Link
                onClick={toggleSidebar}
                className={`${
                  path === "/dashboard/platillos"
                    ? "bg-blue-500 text-white hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-900 dark:text-white "
                    : " bg-white dark:bg-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900"
                } flex items-center gap-x-3.5 py-2  px-2.5  text-sm text-slate-700 rounded-md `}
                to="/dashboard/platillos"
              >
                <span className="material-symbols-rounded">fastfood</span>
                Platillos
              </Link>
            </li>

            <li>
              <Link
                onClick={toggleSidebar}
                className={`${
                  path === "/dashboard/qr"
                    ? "bg-blue-500 text-white hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-900 dark:text-white "
                    : " bg-white dark:bg-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900"
                } flex items-center gap-x-3.5 py-2  px-2.5  text-sm text-slate-700 rounded-md `}
                to="/dashboard/qr"
              >
                <span className="material-symbols-rounded">qr_code</span>
                QR
              </Link>
            </li>

            <li>
              <Link
                onClick={toggleSidebar}
                className={`${
                  path === "/dashboard/configuracion"
                    ? "bg-blue-500 text-white hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-900 dark:text-white "
                    : " bg-white dark:bg-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900"
                } flex items-center gap-x-3.5 py-2  px-2.5  text-sm text-slate-700 rounded-md `}
                to="/dashboard/configuracion"
              >
                <span className="material-symbols-rounded">settings</span>
                Configuracion
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        type="button"
        onClick={toggleSidebar}
        className="text-gray-500 hover:text-blue-600"
      >
        <span className="sr-only">Toggle Navigation</span>
        {isOpen ? (
                  <span class="material-symbols-rounded">
                  close
                  </span>
                ) : (
                  <span class="material-symbols-rounded">
                  menu
                  </span>
                )}

      </button>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default App;
