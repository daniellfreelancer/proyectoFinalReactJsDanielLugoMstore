import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext'

export const Cart = ({title, price, cantidad, id, imgProduct}) => {

    const {removerDelCarrito} = useContext(CartContext)

    return (
        <>
        <div>
            <h3>{title}</h3>
            <p>Precio: ${price}</p>
            <p>Cantidad: {cantidad}</p>
            <img src={imgProduct} />
            <button 
                className="btn btn-danger"
                onClick={() => { removerDelCarrito(id) }}
            >
                <BsFillTrashFill/>
            </button>
        </div>
        </>
    )
}