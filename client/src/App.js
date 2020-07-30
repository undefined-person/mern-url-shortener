import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes'
import { useAuth } from './hooks/auth.hook'
import 'materialize-css'
import { AuthContext } from './context/AuthContext'
import { Nav } from './Components/Nav'
import { Loader } from './Components/Loader'

function App() {
  const { token, login, logout, userId, ready} = useAuth()
  const isAuth = !!token
  const routes = useRoutes(isAuth)
  if(!ready){
    return <Loader/>
  }
  return (
    <AuthContext.Provider value={{ token, login, logout, userId, isAuth }}>
      <Router>
        {isAuth && <Nav />}
        <div className='container'>
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
