import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Spinner } from 'react-bootstrap'
import db  from '../../services/index' 
import { doc,getDoc } from 'firebase/firestore'


export const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const [loading, setLoading] = useState()

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)


            const  miproducto= doc(db,'products',itemId)
            getDoc(miproducto)
            .then((prod)=>{
                setItem({id:prod.id, ...prod.data()});

            }).finally(() => {
                setLoading(false)
            }) 

    }, [itemId])

    return (
        <div className="container">
            {
                loading 
                  ? <div className="d-flex justify-content-center mt-5">
                        <Spinner animation="border" role="status" variant="primary">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                  
                  : <ItemDetail {...item}/>
            }
        </div>
    )
}
