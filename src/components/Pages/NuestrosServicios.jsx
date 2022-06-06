import React from 'react'
import servicios from '../../assets/servicios.png'



const NuestrosServicios = () => {
  return (
    <>
      <div className="container mt-5 mb-5 text-center ">
        <div className=" ">
          <h2> Horario Delivery </h2>
          <h3>
            <strong>Lunes a Viernes : 8:00 a 17:00</strong>
          </h3>
          <h3>
            <strong>Sabados : 8:00 a 13:00</strong>
          </h3>
        </div>
      </div>
      <img src={servicios} className="imgTienda" />
    </>
  );
}

export default NuestrosServicios