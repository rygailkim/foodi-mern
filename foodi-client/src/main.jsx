import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './router/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './contexts/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(  
  <AuthProvider>
    <RouterProvider router={Router} />
  </AuthProvider>
)
