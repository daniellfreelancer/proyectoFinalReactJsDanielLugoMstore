import React from 'react'
import { Navigate, useRoutes } from 'react-router';
import { ItemListContainer } from '../components/ListContainer/ItemListContainer';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from '../components/CartItem/CartView';
import NuestraTienda from '../components/Pages/NuestraTienda';
import ComoComprar from '../components/Pages/ComoComprar';
import NuestrosServicios from '../components/Pages/NuestrosServicios';

export const AppRouter = () => {

    const routes = useRoutes([
        { path: "/", element: <ItemListContainer/>},
        { path: "/category/:catId", element: <ItemListContainer/> },
        { path: "/detail/:itemId", element: <ItemDetailContainer/>},
        { path: "/cart", element: <CartView/>},
        { path: "*", element: <Navigate to="/" />},
        { path: "/nuestra-tienda", element: <NuestraTienda />},
        { path: "/como-comprar", element: <ComoComprar />},
        { path: "/nuestros-servicios", element: <NuestrosServicios />},
    ])

    return routes
}
