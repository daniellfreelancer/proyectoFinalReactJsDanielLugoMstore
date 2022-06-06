import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//import ItemCount from '../ItemCount/ItemCount'
import imgItem from '../../assets/imgItem.svg';
import imgPin from '../../assets/logoPin8.svg'
import './Item.css'

//Aca renderizo la tarjeta del producto
const ProductCard = ( props ) => {

    const {id, title, imgProduct, stock, price, category } = props // 🔹Este es el stock de la tarjeta

    return (
      <Card className="m-2">
        
          <img src={imgPin} style={{ width: "70px" }} className="imgBadge" />
        
        <Card.Img variant="top" src={imgProduct || imgItem}  />
        
        <Card.Body>
          <Card.Subtitle className="text-muted">{title}</Card.Subtitle>
          <Card.Title className="text-info">Precio: $ {price}</Card.Title>
          <div className="d-flex mb-0">
            <Card.Text className="me-2 mb-0">Disponibles: {stock}</Card.Text>
            <Card.Text className="text-muted">
              <small> {category} </small>
            </Card.Text>
          </div>
        </Card.Body>
        <Card.Footer className="text-center">          
          <Link to={`/detail/${id}`} className="btn btn-primary text-center">
            {" "}
            Ver más
          </Link>
        </Card.Footer>
      </Card>
    );
}

export default ProductCard
