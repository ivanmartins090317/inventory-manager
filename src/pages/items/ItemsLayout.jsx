import { Outlet } from "react-router-dom"
const ItemsLayout = () =>{
  return (
    <>
        <h2>Todos os Items</h2>
        <Outlet/>
    </>
  )
}

export {ItemsLayout}