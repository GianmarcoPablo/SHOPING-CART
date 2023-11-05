import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductcProvider from './context/ProductcProvider.jsx'
import CartProvider from './context/CartProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductcProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductcProvider>
)
