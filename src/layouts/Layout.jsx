import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Modal from "react-modal";
import Header from "../components/HeaderComponent";
import Navigation from "../components/Navigation";
import ProductoModal from "../components/ProductoModal";
import CarritoCompras from "../components/CarritoCompras";
import useMenu from "../hooks/useMenu";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function Layout() {

  const { modal } = useMenu();

  return (
    <div className="bg-gray-50 dark:bg-slate-900">
      <Header />
      <main id="content" role="main">
        <Navigation />
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 min-h-[75rem]">
          <Outlet />
        </div>
      </main>

      <CarritoCompras /> 

      <Modal
        className="hs-overlay w-full h-full fixed top-0 left-0 z-[70] overflow-x-hidden overflow-y-auto"
        isOpen={modal}
      >

            <ProductoModal />

      </Modal>

      <ToastContainer />
    </div>
  );
}
