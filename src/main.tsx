import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.scss'
import SignIn from './components/screens/signIn/SignIn'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SignIn/>
  </React.StrictMode>,
)
