import { Outlet, Link } from "react-router-dom"

import './rootLayout.css'

const RootLayout = () =>{
  return (
    <>
     <div className="container-menu">
      <div className="container">
        <div className="logo">LOGO</div>
        <nav className="nav-menu">
         <Link to="/">Inicio</Link>
         <Link to="/items">Items</Link>
        </nav>
      </div>
     </div>
     <Outlet/>
    </>
  )
}

export { RootLayout }