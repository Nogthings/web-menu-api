import clienteAxios from "../../config/axios";
import { formatearDinero } from "../../helpers";
import { API_ENDPOINT } from "../../services/api";
import useMenu from "../../hooks/useMenu";
import useSWR from 'swr';

export default function Pedidos() {

  const token = localStorage.getItem("AUTH_TOKEN");
  const fetcher = () =>
    clienteAxios(API_ENDPOINT.PEDIDOS, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

  const { data, error, isLoading } = useSWR(API_ENDPOINT.PEDIDOS, fetcher, {
    refreshInterval: 1000,
  });

  const { handleClickCompletarOrden } = useMenu();

  console.log(data);
  console.log(error);
  console.log(isLoading);
  if (isLoading) return "Cargando...";

  return (
    <div>
      <h1 className="block text-2xl mb-4 font-bold text-gray-800 sm:text-3xl dark:text-white">
        Pedidos en curso
      </h1>

      <div className="xl:grid grid-cols-4 gap-2 bg-white dark:bg-gray-800">
        {data.data.data.map((pedido) => (
          <div
            className="p-5 bg-white shadow space-y-2 border-b dark:bg-gray-800 rounded"
            key={pedido.id}
          >
            <p className="text-xl text-gray-800 dark:text-gray-100">
              <span className="font-semibold">Mesa:</span> {pedido.mesa}
            </p>
            <p className="text-xl font-bold text-gray-700 dark:text-gray-100">
              Contenido del Pedido:
            </p>
            {pedido.productos.map((producto) => (
              <div
                className="border-b space-y-1 border-b-slate-200 last-of-type:border-none py-4"
                key={producto.id}
              >
                <p className="text-base text-gray-800 dark:text-gray-200">
                  <span className="font-semibold">Producto:</span>{" "}
                  {producto.nombre}
                </p>
                <p className="font-semibold text-gray-800 dark:text-gray-200">Detalles de la orden:</p>
                <p className="text-gray-800 dark:text-gray-200">{producto.pivot.descripcion}</p>
                <p className="text-base text-gray-800 dark:text-gray-200">
                  <span className="font-semibold">Cantidad:</span> {""}
                  {producto.pivot.cantidad}
                </p>    
              </div>
            ))}
            <p className="text-lg font-bold text-gray-800 dark:text-gray-400">
              Cliente: {""}
              <span className="font-normal">{pedido.user.name}</span>
            </p>
            <p className="text-lg font-bold text-gray-800 dark:text-gray-100">
              Total: {""}
              <span className="text-indigo-600 dark:text-indigo-500">
                {formatearDinero(pedido.total)}
              </span>
            </p>
            <button
              onClick={() => handleClickCompletarOrden(pedido.id)}
              type="button"
              className="bg-indigo-600 rounded hover:bg-indigo-800 px-5 py-2 uppercase font-semibold text-white text-center w-full cursor-pointer"
            >
              Listo
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
