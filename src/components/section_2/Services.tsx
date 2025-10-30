import { ImageServices } from './ImageServicies'
import { ListOfDetails } from './ListOfDetails'

export function Services() {
  return (
    <section className="py-20 xl:py-40 px-5 md:px-25  xl:px-30  2xl:px-60 flex flex-col md:flex-row  md:items-center 2xl:items-start justify-center md:gap-30 ">
      <ListOfDetails></ListOfDetails>
      <ImageServices></ImageServices>
    </section>
  )
}
