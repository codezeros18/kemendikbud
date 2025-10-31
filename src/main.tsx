import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Tambahkan basename di sini */}
    <BrowserRouter basename="/kemendikbud">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
