import useMenu from "../hooks/useMenu";
import { formatearDinero } from "../helpers";
import ProductosCarrito from "./ProductosCarrito";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Modal from "react-modal";
import CarritoVacio from "./CarritoVacio";

export default function CarritoCompras() {
  const { mesaLink } = useParams();
  const {
    pedido,
    total,
    modal,
    modalCarrito,
    handleClickModalCarrito,
    handleSubmitNuevaOrden,
    handleAgregarMesaPedido,
  } = useMenu();

  const [numeroMesa, setnumeroMesa] = useState("");
  const [tipoPedido, setTipoPedido] = useState(false);

  const seleccionarTipoPedido = () => {
    setTipoPedido(true);
  };

  const comprobarPedido = () =>
    pedido.length === 0 || modal === true || modalCarrito === true;

  const comprobarMesa = () => !numeroMesa;

  const comprobarAutenticado = () => !localStorage.getItem("AUTH_TOKEN");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClickModalCarrito();
    handleAgregarMesaPedido(numeroMesa);
    handleSubmitNuevaOrden();
  };

  return (
    <>
      <div
        // id="cookies-with-stacked-buttons"
        hidden={comprobarPedido()}
        className="fixed bottom-0 right-0 z-[60] sm:max-w-sm w-full mx-auto p-6 "
      >
        <div className="py-2 px-3 md:p-4 bg-white/[.5] flex items-center justify-between backdrop-blur-xl rounded-xl shadow-2xl dark:bg-slate-900/[.6] dark:shadow-black/[.7]">
          <button
            onClick={() => {
              handleClickModalCarrito();
            }}
            type="button"
            className=" py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
          >
            <svg
              className="w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
            </svg>
            Ver pedido
          </button>
          <div className="ml-2">
            <p className="text-gray-800 dark:text-gray-400">
              Total:{" "}
              <span className="text-blue-600 dark:text-blue-500 font-semibold">
                {formatearDinero(total)}
              </span>{" "}
            </p>
          </div>
        </div>
      </div>

      {/* MODAL CON RESUMEN */}
      <Modal
        isOpen={modalCarrito}
        className="hs-overlay mx-auto w-full h-full fixed top-0 left-0 z-[70] overflow-x-hidden overflow-y-auto "
      >
        <div className="hs-overlay  w-full h-full fixed top-0 left-0 z-[70] overflow-x-hidden overflow-y-auto">
          <div className=" mt-6 sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
            <div className="max-h-full z-[70] overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                <h3 className="font-bold text-gray-800 dark:text-white">
                  Su pedido
                </h3>
                <button
                  onClick={() => {
                    handleClickModalCarrito();
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
              {/* contenido */}
              <div className="p-4 overflow-y-auto space-y-2">
                {tipoPedido === true ? (
                  <>
                    <div>
                      <p>Seleccione tipo de pedido</p>
                    </div>
                  </>
                ) : (
                  <>
                    {pedido.length === 0 ? (
                      <CarritoVacio />
                    ) : (
                      pedido.map((producto) => (
                        <ProductosCarrito
                          key={producto.id}
                          producto={producto}
                        />
                      ))
                    )}
                  </>
                )}
              </div>
              {/* contenido fin */}
              <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                {comprobarAutenticado() ? (
                  <>
                    <div
                      class="bg-gray-50 border border-gray-200 rounded-md p-4"
                      role="alert"
                    >
                      <div class="flex">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-4 w-4 text-gray-500 mt-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                          </svg>
                        </div>
                        <div class="flex-1 md:flex md:justify-between ml-4">
                          <p class="text-sm text-gray-700">
                            Debe iniciar sesión para poder confirmar su pedido
                          </p>
                          <p class="text-sm mt-3 md:mt-0 md:ml-6">
                            <Link
                              class="text-gray-700 hover:text-gray-500 font-medium whitespace-nowrap"
                              to="/auth"
                            >
                              Iniciar sesón
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <form>
                    <button
                      type="button"
                      className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                      onClick={() => {
                        handleClickModalCarrito();
                      }}
                      // data-hs-overlay="#hs-vertically-centered-scrollable-modal-producto"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={() => seleccionarTipoPedido()}
                      className="py-3 ml-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                      // data-hs-overlay="#hs-vertically-centered-scrollable-modal-producto"
                    >
                      Continuar
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
