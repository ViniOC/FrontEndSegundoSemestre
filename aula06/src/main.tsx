import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom'

import Home from './routes/Home/index.tsx'
import Produtos from './routes/Produtos/index.tsx'
import Error from './routes/Error/index.tsx'
import EditarProdutos from './routes/EditarProdutos/index.tsx'
import { GlobalStyle } from './global-styled.ts'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children:[
      {
      path: '/',
      element: <Home />
      },
      {
        path: '/produtos',
        element: <Produtos />
      },
      {
        path: '/produtos/editar/:id',
        element: <EditarProdutos />
      },
      {
        path: '/eletrodomesticos',
        element: <Navigate to="/produtos" />

      }
    ]
  }
])





createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <GlobalStyle />
  </StrictMode>,
)
