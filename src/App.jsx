import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import TicketingLayout from './Layout/TicketingLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
      <TicketingLayout />
    </>
  )
}

export default App
