import type { JSX } from 'react'
import './App.css'
import { Presentation } from './layout/Presentation'
import { BookingAndServices } from './layout/BookingAndServices'
import { Quote } from './layout/Quote'
import { VisitUs } from './layout/VisitUs'

function App(): JSX.Element {
  return (
    <>
      <Presentation></Presentation>
      <BookingAndServices></BookingAndServices>
      <Quote></Quote>
      <VisitUs></VisitUs>
    </>
  )
}

export default App
