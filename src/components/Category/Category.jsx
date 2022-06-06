import React from 'react'
import { useParams } from 'react-router-dom';
import ItemCard from '../Item/ItemCard'

const Category = (product) => {

  

  return (
    <div className="itemList container">
              
     {product.length > 0 ? 
     (product.filter((product) => (
      <ItemCard key={product.id} product={product.category}/>
      ))) :
      (
        <div className="spinner-border  spinnerLoading" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  )
}

export default Category