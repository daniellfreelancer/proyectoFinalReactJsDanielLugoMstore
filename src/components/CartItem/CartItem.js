import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext'
import { Image } from 'react-bootstrap'
import './Cart.css'

export const CartItem = ({title, price, cantidad, id, imgProduct}) => {

    const {removerDelCarrito} = useContext(CartContext)

    return (
        <div className="row mb-5 detalle-carrito">

            <div className="col-2">
             <Image src={imgProduct} height="150" rounded />
            </div>

            <div className="col-2 ">
                <h4 className="text-info">{title}</h4>
                <h5 className="mb-2">Precio: {price}</h5>
                <h6 className="text-muted">Cantidad: {cantidad}</h6>
                <button 
                    className="btn btn-danger"
                    onClick={() => { removerDelCarrito(id) }}
                >
                    <BsFillTrashFill/>
                </button>
            </div>

        </div>
    )
}