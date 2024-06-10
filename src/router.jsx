import { createBrowserRouter } from 'react-router-dom';

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
      { path:true, 
        element: <allItems />
      },
      { path:'new',
        element: <createItems />
       },
      { path:'show',
        element: <ShowItems />
       },
      { path:'update',
        element: <updateItems />
       },

    ]
  }
]
}])

export {router}