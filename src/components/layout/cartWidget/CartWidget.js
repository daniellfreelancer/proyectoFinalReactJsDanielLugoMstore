import React, { useContext } from 'react'
import { BsCart } from 'react-icons/bs'
import { CartContext } from '../../../context/CartContext'
import './CartWidget.scss'
import { Link } from 'react-router-dom'

export const CartWidget = () => {

    const { totalCantidad, carrito } = useContext(CartContext)
    return (
        <div className={ `mt-2 ml-4 ${ carrito.length === 0 ? 'hidden widget' : 'widget' }`}>
            <Link to="/cart" className='carrito-widget'>
                <BsCart />
            </Link>
            <span className='item-count' >{totalCantidad()}</span>
        </div>
    )
}
