import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import clienteAxios from "../config/axios";
import { API_ENDPOINT } from "../services/api";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {

  const {mesaLink} = useParams();

  const [categorias, setCategorias] = useState([]);
  const [mesaState, setMesa] = useState();
  const [categoriaActual, setCategoriaActual] = useState({});
  const [modal, setModal] = useState(false);
  const [modalCarrito, setModalCarrito] = useState(false);
  const [producto, setProducto] = useState({});
  const [pedido, setPedido] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const nuevoTotal = pedido.reduce(
      (total, producto) => producto.precio * producto.cantidad + total,
      0
    );
    setTotal(nuevoTotal);
  }, [pedido]);

  const obtenerCategorias = async () => {
    try {
      const { data } = await clienteAxios(API_ENDPOINT.CATEGORIAS);
      setCategorias(data.data);
      console.log(data.data);
      setCategoriaActual(data.data[0]); // establece la categoria actual
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((categoria) => categoria.id === id)[0];
    setCategoriaActual(categoria);
  };

  const handleClickModal = () => {
    setModal(!modal);
  };

  const handleSetProducto = (producto) => {
    setProducto(producto);
    console.log(producto);
  };

  const handleClickModalCarrito = () => {
    setModalCarrito(!modalCarrito);
  }

  const handleAgregarMesaPedido = (numeroMesa) => {
    setMesa(numeroMesa);
  }

  const handleAgregarProductoPedido = ({ categoria_id, ...producto }) => {
    if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
      const pedidoActualizado = pedido.map((pedidoState) =>
        pedidoState.id === producto.id ? producto : pedidoState
      );
      setPedido(pedidoActualizado);
      console.log(pedidoActualizado);
      toast.success("Se modifico la orden", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      setPedido([...pedido, producto]);
      console.log(pedido);
      toast.success("Agregado al pedido", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log(pedido)
    }
  };

  const handleEditarCantidadProducto = id => {
    const productoActualizar = pedido.filter(producto => producto.id === id)[0]
    setProducto(productoActualizar)
    setModal(!modal);
    setModalCarrito(!modalCarrito);
}

const handleEliminarProductoPedido = id => {
    const pedidoActualizado = pedido.filter(producto => producto.id !== id)
    setPedido(pedidoActualizado)
    toast.success('Eliminado del pedido')
}

const handleSubmitNuevaOrden = async () => {
  const token = localStorage.getItem("AUTH_TOKEN");
  try {
    const { data } = await clienteAxios.post(
      API_ENDPOINT.PEDIDOS,
      {
        total,
        mesa: mesaLink || mesaState,
        productos: pedido.map((producto) => {
          return {
            id: producto.id,
            cantidad: producto.cantidad,
            descripcion: producto.descripcion || "Sin descripcion",
          };
        }),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(data.message, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setTimeout(() => {
      setPedido([]);
      setMesa("");
    }, 2500);
  } catch (error) {
    console.log(error);
    console.log(mesaState);
    console.log(mesaLink)
    toast.error("No se pudo procesar la solicitud, intentelo de nuevo", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};

const handleClickCompletarOrden = async (id) => {
  const token = localStorage.getItem("AUTH_TOKEN");
  try {
    await clienteAxios.put(API_ENDPOINT.PEDIDOS + id, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {}
};

  return (
    <MenuContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        handleClickModal,
        modal,
        handleClickModalCarrito,
        modalCarrito,
        producto,
        handleSetProducto,
        pedido,
        handleAgregarProductoPedido,
        handleEditarCantidadProducto,
        handleEliminarProductoPedido,
        total,
        handleAgregarMesaPedido,
        handleSubmitNuevaOrden,
        handleClickCompletarOrden,
        mesaState,
        setMesa,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider };
export default MenuContext;
