import { RouterProvider } from "react-router-dom"
import { StockContextProvider } from "./contextData"

import { router } from "./router"
const App = () => {
  return (
  <StockContextProvider>
    <RouterProvider router={router} />
  </StockContextProvider>
  )
}

export { App } 