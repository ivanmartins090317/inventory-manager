import { createContext, useState } from "react"
const stockContext = createContext({})

const StockContextProvider = ({children}) =>{
  const [stockItem, setStock] = useState(() =>{
    const storedItems = localStorage.getItem('stockManager')
    if(!storedItems) return []
    const items = JSON.parse(storedItems)
    items.forEach(item =>{
      items.createdAt = new Date(item.createdAt)
      items.updatedAt = new Date(item.updatedAt)
    })
    return items
  }
  )
  // RETORN SOMENTE O ITEM DO ID
  const getItemStock = (itemId) =>{
    return stockItem.find(index => index.id === +itemId)
  }
//  ADICIONA ITEM NO ESTOQUE
  const addItemStock = (item) =>{
    setStock(prevState => {
      const newItem = [item, ...prevState]
      localStorage.setItem('stockManager', JSON.stringify(newItem))
      return newItem
    })
  }
  // MODIFICA ITEM DO STOCK
  const updateItemStock = (itemId, newUpdate) =>{
   setStock(current =>{
    const itemIndex = current.findIndex(index => index.id === itemId)
    const updateItem = [...current]
    Object.assign(updateItem[itemIndex], newUpdate, {updatedAt:new Date()})
    localStorage.setItem('stockManager', JSON.stringify(updateItem))

    return updateItem
   }) 
  }
  // DELETA ITEM DO ESTOQUE COM ID
  const deleteItemStock = (itemId) =>{
    setStock(current =>{
      const deleteItemId = current.filter( item => item.id !== itemId );

      localStorage.setItem('stockManager', JSON.stringify(deleteItemId))
      return deleteItemId
    })
  }
  const stock = {
    stockItem,
    addItemStock,
    getItemStock,
    updateItemStock,
    deleteItemStock
  }
  return (
    <stockContext.Provider value={stock}>
      {children}
    </stockContext.Provider>
  )
}

export {StockContextProvider}