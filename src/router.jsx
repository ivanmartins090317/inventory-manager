import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from './pages/rootLayout/Index';
import { Home } from './pages/rootLayout/Home';

import { ItemsLayout } from './pages/items/ItemsLayout';
import { ListItems } from './pages/items/ListItems';
import { CreateItems } from './pages/items/CreateItems';
import { ShowItems } from './pages/items/ShowItems';
import { UpdateItems } from './pages/items/UpdateItems';

const router = createBrowserRouter([{
 path: '/',
 element: <RootLayout />,
 children: [{
  index: true, 
  element: <Home />
 },
  {
    path:'items',
    element: <ItemsLayout />,
    children: [
      { index:true, 
        element: <ListItems />
      },
      { path:'new',
        element: <CreateItems />
       },
      { path:':id',
        element: <ShowItems />
       },
      { path:':id/update',
        element: <UpdateItems />
       },
    ]
  }
]
}])

export {router}