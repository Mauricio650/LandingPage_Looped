import { ImageBooking } from './ImageBooking'
import { TextBooking } from './TextBooking'

export function Booking() {
  return (
    <section className="w-full flex  flex-col-reverse md:flex-row 2xl:gap-30 gap-10 lg:gap-20 px-5 md:px-25  xl:px-30  2xl:px-60 ">
      <ImageBooking></ImageBooking>
      <TextBooking></TextBooking>
    </section>
  )
}
