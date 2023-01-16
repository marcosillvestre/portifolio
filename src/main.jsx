import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './GlobalStyles/GlobalStyles'
import App from './home/App'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
)
