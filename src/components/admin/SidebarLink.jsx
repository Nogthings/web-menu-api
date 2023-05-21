import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SidebarLink({icono, titulo, ruta}) {
  const [path, setPath] = useState("");

  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname;
    setPath(pathName);
  }, [location]);

  return (
    <Link
    className={`${
      path === ruta
        ? "bg-blue-500 text-white hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-900 dark:text-white "
        : " bg-white dark:bg-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900"
    } flex items-center gap-x-3.5 py-2  px-2.5  text-sm text-slate-700 rounded-md `}
    to={ruta}
  >
    {<span className="material-symbols-rounded">{icono}</span>}
    {titulo}
  </Link>
  )
}
