import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Home } from './pages/Home.tsx';
import { Layout } from './components/Layout.tsx';
import { StockDetails } from './pages/StockDetails.tsx';
import { StockList } from './pages/StockList.tsx';
import { Form } from './pages/form.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout />,
    children:[
      {
        path:'home',
        element:<Home/>
      },
      {
path:'details',
element : <StockDetails/>
      },
      {
        path:'list',
        element: <StockList/>
      },
      {
        path:'form',
        element: <Form
        />
      }
    ]
  },
  
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
