import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Footer from './components/Footer'

function App() {
  // Estado que decide qué pantalla se muestra: "home" | "login" | "register"
  const [vista, setVista] = useState('home')

  return (
    <>
      <Navbar onNavegar={setVista} />

      {vista === 'home' && <Home />}
      {vista === 'register' && <Register />}
      {vista === 'login' && <Login />}

      <Footer />
    </>
  )
}

export default App
