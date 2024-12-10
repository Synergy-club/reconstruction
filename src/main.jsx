import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './assets/global-style/style.css'
import App from './App.jsx'
import { ReducerProvider } from './contexts/ReducerContext.jsx'
import { ReferenceProvider } from './contexts/ReferenceContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ReducerProvider>
        <ReferenceProvider>
          <App />
        </ReferenceProvider>
      </ReducerProvider>
    </BrowserRouter>
  </StrictMode>
)
