import { useState } from 'react'

import './App.css'
import { BusinessCard } from './components/BusinessCard'

function App() {
  const cardDetails = {
    name: "Kalpesh",
    interests: ['Ionic', 'Open Source', 'App Dev'],
    description: "SWE@KION",
    linkedin: "https://www.linkedin.com/in/kalpesh-kumawat-612057162/"
  }
  return (
      <div>
       <BusinessCard cardDetails={cardDetails}></BusinessCard>
     </div>
  )
}

export default App
