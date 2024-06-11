import { Outlet } from "react-router-dom"

import './itemLayout.css'
const ItemsLayout = () =>{
  return (
    <div className="container-items">
        <h2>Todos os Items</h2>
        <Outlet/>
    </div>
  )
}

export {ItemsLayout}