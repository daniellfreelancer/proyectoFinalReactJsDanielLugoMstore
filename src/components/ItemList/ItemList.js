import React from 'react'
import { Container, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Item from '../Item/Item'
import './itemList.css'

const ItemList = ({items}) => {
    
    return (
        <div>
            
            <Alert variant={'info'} className="py-2 text-center">
            <small className=' text-center ' > Bienvenidos  a Meat Store! </small>
            </Alert>
            
            <Container>
                <h2 className="text-center">Nuestros Productos</h2>
                <div className="product-grid products ">                    
                    {items.map((prod) => <Item key={prod.id} {...prod}/>)}                    
                </div>
            </Container>
            
            <Link to='/' className='btn btn-danger text-center'>
                Volver
            </Link>
        </div>
    )
}

export default ItemList
