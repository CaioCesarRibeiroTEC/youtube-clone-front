import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { UserStorage } from './contexts/contexts'
import { BrowserRouter } from 'react-router-dom' 


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserStorage>
        <App />
      </UserStorage>
    </BrowserRouter>
  </React.StrictMode>,
)