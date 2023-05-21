import { useState, useEffect } from "react";
import useMenu from "../hooks/useMenu";
import { API_ENDPOINT } from "../services/api";
import { formatearDinero } from "../helpers";

export default function ProductoModal() {
  const { producto, handleAgregarProductoPedido, pedido, handleClickModal } = useMenu();
  const [cantidad, setCantidad] = useState(1);
  const [descripcion, setDescripcion] = useState("");
  const [edicion, setEdicion] = useState(false);

  useEffect(() => {
    if(pedido.some(pedidoState => pedidoState.id === producto.id )) {
        const productoEdicion = pedido.filter( pedidoState => pedidoState.id === producto.id)[0]

        setCantidad(productoEdicion.cantidad)
        setEdicion(true)
    } 
  }, [pedido])

  useEffect(() => {
    setDescripcion(producto.descripcion || "");
  }, [producto]);

  const handleAgregarProducto = () => {
    // Restablecer valores de cantidad y edición a sus valores predeterminados
    handleAgregarProductoPedido({
      ...producto,
      cantidad,
      descripcion,
    });
  };

  return (
      <div
        //  id="hs-vertically-centered-scrollable-modal-producto"
         className="hs-overlay  w-full h-full fixed top-0 left-0 z-[70] overflow-x-hidden overflow-y-auto"
      >
        <div 
          className=" mt-6 sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center"
        >
          <div 
          className="max-h-full z-[70] overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
          >
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white">
                {producto.nombre}
              </h3>
              <button
                    onClick={() =>{
                      handleClickModal()
                  }}
                type="button"
                className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-3.5 h-3.5"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <div className="space-y-4">
                <div>
                  <img
                    className="overflow-hidden mx-auto mb-4 rounded-full h-40 w-40"
                    src={`${API_ENDPOINT.IMAGENES + producto.imagen}`}
                    alt="producto-imagen"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {producto.nombre}
                  </h3>
                  <p className="mt-1 text-gray-800 dark:text-gray-400">
                    {producto.detalles}
                  </p>
                  <p className="mt-1 font-semibold text-blue-600 dark:text-blue-500">
                    ${producto.precio}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Seleccione la cantidad:
                  </h3>
                  <div className="flex gap-2 mt-2">
                    <button
                      className="text-gray-800 dark:text-blue-600"
                      type="button"
                      onClick={() => {
                        if (cantidad <= 1) return;
                        setCantidad(cantidad - 1);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                    <p className="text-gray-800 dark:text-gray-400 font-semibold text-xl">
                      {cantidad}
                    </p>
                    <button
                      className="text-gray-800 dark:text-blue-600"
                      type="button"
                      onClick={() => {
                        if (cantidad >= 10) return;
                        setCantidad(cantidad + 1);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg mb-2 font-semibold text-gray-800 dark:text-white">
                    Detalles de la Orden:
                  </h3>
                  <textarea
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    name="description"
                    id="description"
                    placeholder="Aqui puede detallar su orden si quiere modificar algun ingrediente del platillo"
                    className="py-3 px-4 block bg-gray-200 w-full border-gray-500 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    rows="3"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
              <button
                type="button"
                className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                onClick={() =>{
                  handleClickModal()
              }}
                // data-hs-overlay="#hs-vertically-centered-scrollable-modal-producto"
              >
                Cancelar
              </button>
              <button
        onClick={() =>{
          handleAgregarProductoPedido({...producto, cantidad, descripcion: descripcion})
          handleClickModal()
      }}
                
                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                // data-hs-overlay="#hs-vertically-centered-scrollable-modal-producto"
              >
                 {edicion ? "Guardar cambios" : "Agregar al pedido"} 
              </button>
            </div>
          </div>
        </div>
      </div>
  
  );
}
