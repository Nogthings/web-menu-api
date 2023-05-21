import useMenu from "../hooks/useMenu";
import { formatearDinero } from "../helpers";
import { API_ENDPOINT } from "../services/api";

export default function ProductosCarrito({ producto }) {
  const { handleEditarCantidadProducto, handleEliminarProductoPedido } =
    useMenu();
  const { id, nombre, precio, cantidad, descripcion } = producto;

  return (
    // <img className=" h-16 w-16 rounded-full overflow-hidden " src={`${API_ENDPOINT.IMAGENES + producto.imagen}`} alt="imgproducto" />
    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="h-24 flex flex-col justify-center items-center rounded-t-xl">
        <img
          className=" h-24 p-2 w-24 rounded-full overflow-hidden "
          src={`${API_ENDPOINT.IMAGENES + producto.imagen}`}
          alt="imgproducto"
        />
      </div>

      <div className="p-4 md:p-6">
        <p className="block mb-1 text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
          {nombre}
        </p>
        <p className="block mb-1 text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
          Cantidad:{" "} {cantidad}
        </p>
        <p className="block mb-1 text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
          Precio:{" "} {formatearDinero(precio)}
        </p>
        <p className="block mb-1 text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
          Subtotal:{" "} {formatearDinero(precio * cantidad)}
        </p>
        <p className="block mb-1 text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
          Detalles de la orden:{" "} {descripcion}
        </p>
      </div>
      <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
        <button
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
          onClick={() => handleEditarCantidadProducto(id)}
          //data-hs-overlay="#hs-vertically-centered-scrollable-modal-producto"
        >
          Editar
        </button>
        <button
          onClick={() => handleEliminarProductoPedido(id)}
          data-hs-overlay="#hs-vertically-centered-scrollable-modal-orden"
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
