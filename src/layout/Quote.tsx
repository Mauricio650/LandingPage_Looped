import { Image1 } from '../components/section_3/Image1'
import { Image2 } from '../components/section_3/Image2'
import { Image3 } from '../components/section_3/image3'
import { QuoteText } from '../components/section_3/Quote'

export function Quote() {
  return (
    <section className=" bg-[#313832] py-18 md:pt-30 2xl:pt-40  px-5 md:px-25  xl:px-30  2xl:px-60">
      <section className=" w-full flex flex-col gap-35">
        <QuoteText></QuoteText>
        <Image1></Image1>
        <Image2></Image2>
        <Image3></Image3>
      </section>
    </section>
  )
}
