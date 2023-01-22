import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import io from 'socket.io-client'

import './index.css'

import SocketContext from './utils/socketContext'
import App from './App'

const socket = io("http://localhost:5000")

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SocketContext.Provider value={socket}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </SocketContext.Provider>
  </React.StrictMode>
)
