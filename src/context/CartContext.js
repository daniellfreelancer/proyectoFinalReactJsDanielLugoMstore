import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import React, { createContext, useState } from 'react';
import Swal from 'sweetalert2';
import db from '../services/index'

export const CartContext = createContext()


export const validarTodoLLeno = (campos) => {
  return campos.some((campo) => campo === "")
}

export const CartProvider = ( {children} ) => {

    const [carrito, setCarrito] = useState([])

    const [producto, setProducto]= useState()
    const [productos, setProductos] = useState()
    const [loading,setLoading] = useState(false)

    const agregarAlCarrito = (item) => {
      setCarrito( [...carrito, item] )
    }

    const removerDelCarrito = (id) => {
      setCarrito( carrito.filter(prod => prod.id !== id ) )
    }

    const vaciarCarrito = () => {
      setCarrito([])
    }

    const totalCantidad = () => {
      return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const totalCompra = () => {
      return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
    }

    const isInCart = (id) => {
      return carrito.some( prod => prod.id === id )
    }

    const limpiarTodoElCarrito = () => {
      setCarrito([]);
    };


    const fetchGenerateTicket =  async ({datos}) => {
      setLoading(true)
      try {
          const col = collection(db,"myorders")
          const order =  await addDoc(col,datos)
          setLoading(false)
          Swal.fire({
            title:"Orden # " + order.id,
            text: "Su orden de compra se genero correctamente!" ,
            icon: "success",
          });
          console.log(order.id)
      } catch (error) {
          console.log(error)
      }
    };


    return (
        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            removerDelCarrito,
            vaciarCarrito,
            totalCantidad,
            isInCart,
            totalCompra,
            validarTodoLLeno,
            limpiarTodoElCarrito,
            fetchGenerateTicket
        }}>
            {children}
        </CartContext.Provider>
    )
}