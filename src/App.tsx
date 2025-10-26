import type { JSX } from 'react'
import './App.css'
import { Presentation } from './layout/Presentation'
import { BookingAndServices } from './layout/BookingAndServices'

function App(): JSX.Element {
  return (
    <>
      <Presentation></Presentation>
      <BookingAndServices></BookingAndServices>
    </>
  )
}

export default App
