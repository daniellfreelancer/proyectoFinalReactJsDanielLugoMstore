import React from 'react'
import tienda from '../../assets/nuestraTienda.png'
import {FiMapPin} from 'react-icons/fi'

import './Pages.css'

const NuestraTienda = () => {
  return (
      <>
      <div className='container mt-5 mb-5 text-center ' >
         <div className=' ' >
           <h2> Tambien puedes venir a nuestra tienda</h2>           
           <h3><FiMapPin/> 1° Avenida 1698 esquina Pajaritos</h3>
           <span>Lunes a Sabado 8:00hrs hasta 18:00hrs</span> 
         </div>
      </div>
      <img src={tienda} className='imgTienda' />
        

      </>
    
  )
}

export default NuestraTienda