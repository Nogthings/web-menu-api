import useMenu from "../hooks/useMenu";
import { API_ENDPOINT } from "../services/api";
import { formatearDinero } from "../helpers";

export default function CardProducto({ producto }) {

  const { nombre, imagen, precio, estado, detalles } = producto;
  const comprobarProductoDisponible = () => producto.estado === 0;

  const { handleSetProducto, handleClickModal } = useMenu();

  return (
    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="flex flex-col justify-center items-center bg-slate-600 rounded-t-xl">
      <div className=" relative ">
        <img
          className={` overflow-hidden object-contain rounded-t-xl 
          ${comprobarProductoDisponible() 
            ?" opacity-20 "
            :" "}
          `}
          src={`${API_ENDPOINT.IMAGENES + producto.imagen}`}
          alt="producto_imagen"
        />

        <div className={` absolute inset-0 flex items-center justify-center 
        ${comprobarProductoDisponible() 
        ?""
        :" hidden "}
        `}>
          <p className="text-3xl font-semibold text-white">
            Agotado
          </p>
        </div>
        </div>
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
          {nombre}
        </h3>
        <span className="block mb-1 text-sm font-semibold uppercase text-blue-600 dark:text-blue-500">
          {formatearDinero(precio)}
        </span>
        <p className="mt-3 text-gray-500">{detalles}</p>
      </div>
      <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
        <button
          className={
            comprobarProductoDisponible()
              ? "w-full py-3 px-4 inline-flex cursor-default justify-center items-center gap-2 rounded-b-xl font-medium bg-white text-gray-700 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-offset-gray-800"
              : "w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-b-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
          }
          onClick={() => {
            handleClickModal();
            handleSetProducto(producto);
          }}
          disabled={comprobarProductoDisponible()}
          data-hs-overlay="#hs-vertically-centered-scrollable-modal-producto"
        >
          {comprobarProductoDisponible()
            ? "Producto no disponible"
            : "Agregar al pedido"}
        </button>
      </div>
    </div>
  );
}
