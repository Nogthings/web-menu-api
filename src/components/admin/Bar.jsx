import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`bg-gray-800 text-white h-screen w-64 ${isOpen ? "block" : "hidden md:block"}`}>
      <div className="p-4">
        <h1 className="text-lg font-bold">Mi Sidebar</h1>
      </div>
      <nav className="text-white text-base font-semibold pt-3">
        <Link to="/" className="flex items-center active-nav-link">
          <span className="ml-2">Inicio</span>
        </Link>
        <a href="/" className="flex items-center mt-4 hover:text-gray-300">
          <span className="ml-2">Acerca de</span>
        </a>
        <a href="/" className="flex items-center mt-4 hover:text-gray-300">
          <span className="ml-2">Contacto</span>
        </a>
      </nav>
    </div>
  );
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="bg-gray-800 text-white px-3 py-2 rounded-md absolute top-0 right-0 mt-4 mr-4 md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? "Cerrar" : "Abrir"}
      </button>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default App;
