import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './site/styles/base.css'
import './site/styles/pages.css'
import './site/styles/game-embed.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
