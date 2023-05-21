const BASE_URL = import.meta.env.VITE_API_URL;

export const API_ENDPOINT = {
    LOGIN: BASE_URL + '/api/login/',
    REGISTER: BASE_URL + '/api/registro/',
    LOGOUT: BASE_URL + '/api/logout/',
    REGISTER: BASE_URL + '/api/registro/',
    USER: BASE_URL + '/api/user/',
    CATEGORIAS: BASE_URL + '/api/categorias/',
    PRODUCTOS: BASE_URL + '/api/productos/',
    PEDIDOS: BASE_URL + '/api/pedidos/',
    IMAGENES: BASE_URL + '/storage/product/image/'
};