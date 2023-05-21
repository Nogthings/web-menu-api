import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { MenuProvider } from './providers/MenuProvider'
import router from './router'
import './index.css'
import('preline')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuProvider>
      <RouterProvider router={router}/>
    </MenuProvider>
  </React.StrictMode>,
)
