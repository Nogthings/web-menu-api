import useMenu from "../hooks/useMenu";
import clienteAxios from "../config/axios";
import useSWR from "swr";
import { API_ENDPOINT } from "../services/api";
import CardProducto from "../components/CardProducto";


export default function Inicio() {
  const { categoriaActual, pedido} = useMenu();

  const fetcher = () => clienteAxios(API_ENDPOINT.PRODUCTOS).then(data => data.data);
  const { data, error, isLoading } = useSWR(API_ENDPOINT.PRODUCTOS, fetcher, {
    refreshInterval: 5000,
  });

  console.log(pedido);
  console.log(data)
  console.log(error)

  if (isLoading)
    return (
      <div className="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
          <div className="flex justify-center">
            <div
              className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    )

    const productos = data.data.filter(producto => producto.categoria_id === categoriaActual.id)

  return (
    <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h1 className="text-xl mb-5 text-center font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
          {categoriaActual.nombre}
        </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {productos.map(producto => (
          <CardProducto 
            key={producto.id}
            producto={producto}/>
        ))}
      </div>
    </div>
  );
}
