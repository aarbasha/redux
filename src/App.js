import React from 'react'
import Navbarx from './Components/Navbar'
import Router from './Router/router'
// SETUP 4 fROM Redux import provader
import { Provider } from 'react-redux'
import Store from './Redux/Store'

const App = () => {
  return (
    <Provider store={Store}>
      <div>
        <Navbarx />
        <div className='container h3 mt-3'>
          <Router />
        </div>
      </div>
    </Provider>

  )
}

export default App