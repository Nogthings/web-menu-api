import useMenu from "../hooks/useMenu";
import { API_ENDPOINT } from "../services/api";

export default function Categoria({categoria}) {

  const { handleClickCategoria, categoriaActual } = useMenu();
  const{ icono, id, nombre } = categoria
  const resaltarCategoria = () =>
    categoriaActual.id === id ? "rounded-full border-2 border-blue-500 dark:border-blue-600 " : "";

  return (
    <div className="snap-center shrink-0 flex flex-col space-y-1 items-center pr-5 sm:pr-8 sm:last-pr-0">
      <button
        className="inline-flex items-center justify-center h-[4rem] w-[4rem] rounded-full bg-gray-600"
        type="button"
        onClick={() => handleClickCategoria(id)}
      >
        <img className={`${resaltarCategoria()}rounded-full hover:border-2 hover:border-indigo-300`} src={`${API_ENDPOINT.IMAGENES + icono}`} alt="categoria_icono" />
      </button>
      <p className="dark:text-gray-400">
         {nombre} 
      </p>
    </div>
  );
}
