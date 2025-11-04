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
      <footer className="bg-[#231F1F] py-10 w-full px-5 md:px-25  xl:px-30  2xl:px-60 flex flex-col gap-30 ">
        <nav>
          <ul className="flex gap-10 text-[#A2B6A2]">
            <li className="cursor-pointer border border-transparent border-b-[#A2B6A2]">
              Citas
            </li>
            <li className="cursor-pointer border border-transparent border-b-[#A2B6A2]">
              Tienda
            </li>
          </ul>
        </nav>
        <img
          className="w-[130px] md:w-[200px] lg:w-[440px] cursor-pointer"
          src="logo/Looped_Green.webp"
          alt="Logo of looped. Looped is the name of hair salon"
        />
      </footer>
    </>
  )
}

export default App
