import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AgentProvider } from './context/AgentContext.jsx'
import Agent from './components/Agent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AgentProvider>
      <App />
      <Agent />
    </AgentProvider>
  </StrictMode>,
)
