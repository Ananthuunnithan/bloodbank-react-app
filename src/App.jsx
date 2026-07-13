import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import addDonor from './components/addDonor'
import viewDonor from './components/viewDonor'
import navBar from './components/navBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<addDonor/>}/>
  <Route path='/view' element={<viewDonor/>}/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
