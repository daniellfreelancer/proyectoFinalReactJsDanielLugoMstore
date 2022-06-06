import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartItem } from './CartItem'
import { BsFillCartXFill } from 'react-icons/bs'
import Formulario from '../layout/Formulario/Formulario'
import '../layout/Formulario/Formulario.css'

export const CartView = () => {

    const {carrito, vaciarCarrito, totalCompra, } = useContext(CartContext)

    return (
        <div className="container my-5">
            {
                carrito.length > 0 
                ?   <>
                        <h2 className="text-center">Productos en el carrito</h2>
                        <hr/>
                        <section>
                            {
                                carrito.map((prod) => <CartItem key={prod.id} {...prod}/>)
                            }
                        </section>
                        <hr/>
                        <div className="d-flex justify-content-end mb-5">
                            <h4> Sub-Total  : ${totalCompra()} </h4>
                        </div>
                        <div lassName='vaciar-carrito'>
                            <Formulario total={totalCompra(carrito)} compra={carrito} className='vaciar-carrito' />
                            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>                            
                        </div>
                    </>

                :   <>
                        <div className="text-muted d-flex justify-content-center">
                            <BsFillCartXFill size={50}/>
                        </div>
                        <h4 className="text-center text-muted mt-3">No has agregado productos al carrito</h4>
                        <hr/>
                        <div className="d-flex justify-content-center">
                            <Link to="/" className="btn btn-primary">Volver</Link>
                        </div>
                    </>
            }
        </div>
    )
}