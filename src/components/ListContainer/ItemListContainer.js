/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router'
import { getData } from '../../helpers/getData'
import ItemList from '../ItemList/ItemList'
import { Spinner } from 'react-bootstrap'
import {collection,getDocs,query,where} from 'firebase/firestore'
import db from '../../services/index'
import Slider from '../layout/slider/Slider'
import Testimonios from '../layout/testimonios/Testimonios'


export const ItemListContainer = (props) => {

    const {greeting, content} = props 
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const { catId } = useParams()
  

    useEffect(() => {

        setLoading(true)

            const micoleccion= collection(db,"products")

            const q= catId ? query(micoleccion,where('category','==',catId)) : micoleccion
             getDocs(q)
             .then((datos)=>{
                 setProducts(datos.docs.map((doc)=>({id:doc.id,...doc.data()})));

             }).finally(()=>{
                 setLoading(false)
             })


    }, [catId]) 
    return (
      <Container>
        <Row>
          <Slider />
        </Row>

        <Row>
          <h3 className="mt-3 text-center">{greeting}</h3>
          <p className="text-center">{content}</p>
        </Row>
        <Row>
          {loading ? (
            <div className="d-flex justify-content-center mt-5">
              <Spinner animation="border" role="status" variant="primary">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <ItemList items={products} />
          )}
        </Row>
        <Testimonios />
      </Container>
    );
}