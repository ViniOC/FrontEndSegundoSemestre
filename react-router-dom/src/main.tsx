import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyle from './global-styled.ts'
import EditarProdutos from './routes/EditarProdutos/indetx.tsx'
import Error from './routes/Error/index.tsx'
import Home from './routes/Home/index.tsx'
import Produtos from './routes/Produtos/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/produtos',
        element: <Produtos />
      },
      {
        path: 'produtos/editar/:id',
        element: <EditarProdutos />
      }
    ]
  }


])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </StrictMode>,
)
