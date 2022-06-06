import React from 'react'
import { IoStarSharp } from 'react-icons/io5'
import './Testimonios.css'

const Testimonios = () => {
  return (

    <section className="">
        <h2 className='text-center titulo-testimonio '>Nuestras Reseñas</h2>
      
      <div className="row">

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <div className="card-image text-center">
            <IoStarSharp className='stars' />
            <IoStarSharp className='stars' />
            <IoStarSharp className='stars' />
            <IoStarSharp className='stars' />
            <IoStarSharp className='stars' />
            <hr className="testimonial-line" />
          </div>
          <div className="card-body shadow">
            <div className="testimonial-text">
            Excelente atención y muy rápida la entrega. Muy satisfecho con la compra ya que la hamburguesa que comí realmente era como la foto de la promoción.
            </div>
            <div className="testimonial-author shadow text-center font-monospace ">Frank Gibson </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <div className="card-image text-center">
            <IoStarSharp className='stars' />
            <IoStarSharp className='stars' />
            <IoStarSharp className='stars' />
            <IoStarSharp className='stars' />
            <IoStarSharp className='stars' />
            <hr className="testimonial-line" />
          </div>
          <div className="card-body shadow">
            <div className="testimonial-text ">
            Atención muy buena y rapida, cumplen con los parámetros de seguridad para el COVID 19 entrega rapida y segura.
            </div>
            <div className="testimonial-author shadow text-center font-monospace ">Ana B.</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <div className="card-image text-center">
            <IoStarSharp className='stars' />
            <IoStarSharp className='stars' />
            <IoStarSharp className='stars' />
            <IoStarSharp className='stars' />
            <IoStarSharp className='stars' />
            <hr className="testimonial-line" />
          </div>
          <div className="card-body shadow">
            <div className="testimonial-text">
            Buenos productos a buenos precios, rápida atención... recomendable  
            </div>
            <div className="testimonial-author shadow text-center font-monospace">Jose muñoz</div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <div className="card-image text-center">
            <IoStarSharp className='stars' />
            <IoStarSharp className='stars' />
            <IoStarSharp className='stars' />
            <IoStarSharp className='stars' />
            <IoStarSharp className='stars' />
            <hr className="testimonial-line" />
          </div>
          <div className="card-body shadow">
            <div className="testimonial-text">
              Tienen productos nuevos del mercado y variedad de marcas, 100 % Recomendable.
            </div>
            <div className="testimonial-author shadow text-center font-monospace ">Gerson M</div>
          </div>
        </div>
        
      </div>
      
    </section>
  );
}

export default Testimonios