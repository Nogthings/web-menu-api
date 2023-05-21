import useMenu from "../hooks/useMenu";
import Categoria from "./Categoria";

export default function Navigation() {

  const { categorias, categoriaActual, modal, modalCarrito } = useMenu();

  const comprobarModal = () => modal === true || modalCarrito === true;

  return (
    <nav
      hidden={comprobarModal()}
      className="sticky -top-px bg-white z-10 text-sm font-medium text-black ring-1 ring-gray-900 ring-opacity-5 border-t shadow-sm shadow-gray-100 pt-6 md:pb-6 -mt-px dark:bg-slate-900 dark:border-gray-800 dark:shadow-slate-700/[.7]"
      aria-label="Jump links"
    >
      <div className="max-w-7xl snap-x w-full flex items-center overflow-x-auto scrollbar-x px-4 sm:px-6 lg:px-8 pb-4 md:pb-0 mx-auto dark:scrollbar-x">

      {categorias.map((categoria) => (
              <Categoria key={categoria.id} categoria={categoria} />
      ))}

      </div>
    </nav>
  );
}
