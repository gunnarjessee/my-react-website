import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LogoComponent from './components/LogoComponents'
import TitleComponent from './components/TitleComponent'

function App() {

  return (
    <div>
      <header>
        <LogoComponent></LogoComponent>
        <TitleComponent></TitleComponent>
      </header>
      
    </div>
  )
}

export default App
