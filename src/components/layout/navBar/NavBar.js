import './navBar.css'
import { CartWidget } from '../cartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
import logo2 from './LogoMeatStore.svg';

const NavBar2 = (  ) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-navbar container-fluid">
      <div className="container">
        <NavLink to="/">
          <img
            src={logo2}
            className="navbar-brand"
            width="100px"
            alt="LogoMeatstore"
          />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon icono-hamburguesa"></span>
        </button>
        <div className="collapse navbar-collapse barra-navegacion " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ">
            <div className="dropdown">
              <a
                className=" btn btnDrop dropdown-toggle"                
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Marcas
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li className="nav-item">
                  <NavLink to="/category/not-co" className="nav-link navDrop">
                    Not-Co
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/category/receta-del-abuelo"
                    className="nav-link navDrop"
                  >
                    Receta del Abuelo
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/category/la-crianza"
                    className="nav-link navDrop"
                  >
                    La Crianza
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/category/mister-veggie"
                    className="nav-link navDrop"
                  >
                    Mister Veggie
                  </NavLink>
                </li>
              </ul>
            </div>
            <li className="nav-item">
              <NavLink to="/nuestra-tienda" className="nav-link">
                Tienda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/nuestros-servicios" className="nav-link">
                Servicios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/como-comprar" className="nav-link">
                Como Comprar
              </NavLink>
            </li>
            <li className="nav-item">
              <a href="#footer" className="nav-link">
                Social Media
              </a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
  
  


}

export default NavBar2 