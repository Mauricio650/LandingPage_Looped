import { Booking } from '../components/section_2/Booking'
import { Services } from '../components/section_2/Services'

export function BookingAndServices() {
  return (
    <section className="bg-[#F9EBCC] pt-18 md:pt-30 2xl:pt-40 pb-30">
      <Booking></Booking>
      <Services></Services>
    </section>
  )
}
