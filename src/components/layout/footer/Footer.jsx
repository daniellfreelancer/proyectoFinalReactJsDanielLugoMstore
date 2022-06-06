import React from 'react'
import './Footer.css';
import { TiSocialFacebook,TiSocialTwitter, TiSocialLinkedin, TiSocialInstagram  } from 'react-icons/ti'
import { FaReact } from 'react-icons/fa'
import receta from '../../../assets/logorecetadelabuelo.png'
import mister from '../../../assets/misterveggie.png'
import crianza from '../../../assets/lacrianza.png'
import not from '../../../assets/notco.jpg'
import Firma from './Firma';

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer-top text-center text-white">
        <div className="container p-4">
          <section class="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <TiSocialFacebook />
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <TiSocialTwitter />
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <TiSocialInstagram />
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <TiSocialLinkedin />
            </a>
          </section>

          <section className="mb-4">
            <p>
              Meat Store es una tienda On-Line que trae una gran variedad de
              productos a base de plantas, con proteinas vegetales. Actualmente
              contamos con stock de diferentes marcas.
            </p>
            <h2>Nuestras Marcas</h2>
          </section>

          <section className="">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <img src={not} style={{ width: 200 }} className="marcas" />
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <img src={crianza} style={{ width: 200 }} className="marcas" />
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <img src={mister} style={{ width: 200 }} className="marcas" />
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <img src={receta} style={{ width: 200 }} className="marcas" />
              </div>
            </div>
          </section>
        </div>

        <p>
          Este e-commerce ha sido realizado en funcion del Proyecto Final para
          el curso de <FaReact /> React.Js <FaReact /> de{" "}
          <strong>CoderHouse</strong>, por lo que todos los pedidos realizados a
          traves de esta aplicacion no serán reales.
        </p>

        <Firma />
      </footer>
    </>
  );
}

export default Footer