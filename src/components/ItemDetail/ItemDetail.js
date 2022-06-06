import React, {useState, useContext} from 'react'
import { Card, Button, Row, Col, Image } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './ItemDetail.css';
 
export const ItemDetail = (props) => {

    const { id, title, imgProduct, stock, price, category, description, weight } = props

    const context = useContext(CartContext)

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0)
    

    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1) 
    }

    const handleToIndex = () => {
        navigate('/')
    }

    const handleAddToCart = () => {
        if (cantidad > 0) {

            agregarAlCarrito({
                id, title, price, imgProduct, cantidad
            })
            
        }
    }

    return (
        <>
            <Row>
                <Col className="mt-4">                    
                    <Button className="btn btn-info text-white" onClick={handleToIndex}>Ir al inicio</Button>
                </Col>
            </Row>
            <Card className="mt-3">
                <Card.Header as="h5" className="text-muted card-header">
                    {title}
                    <Card.Text className="text-muted">                          
                        <small> {category} </small>
                    </Card.Text>
                </Card.Header>

                <Card.Body>
                    <Row>
                    <Col xs={6}>
                        <Image src={imgProduct} height="300" rounded />
                        <p className='ingredientes' >Ingredientes</p>
                        <Card.Text> {description} </Card.Text>
                        <p>Peso neto: {weight} </p>
                    </Col>

                    <Col className='link-compra'>
                        <Card.Title className="text-info">Precio: $ {price}</Card.Title>
                        <div className="d-flex mb-0">
                        <Card.Text className="me-2 mb-0 d-end">
                            Disponibles: {stock}
                        </Card.Text>
                        </div>
                        <Row className="mt-4">
                        <Col xs={6} >

                            {
                                !isInCart(id) 
                                    ? <ItemCount  
                                    max={stock}
                                    cantidad={cantidad}
                                    setCantidad={setCantidad} 
                                    onAdd={handleAddToCart} 
                                    />
                                : <Link to="/cart" variant="primary" className="btn btn-success">Terminar compra</Link>
                            }
                                
                        </Col> 
                        </Row>
                    </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <marquee>
                        Meat Store - Prefiere compra On-Line - despachamos a todo el pais - Entra a nuestras Redes Sociales y mira los nuevos descuentos.
                    </marquee>
                </Card.Footer>
            </Card>
        </>
    )
}
