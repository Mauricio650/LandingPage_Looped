import { Image1 } from '../components/section_3/Image1'
import { Image2 } from '../components/section_3/Image2'
import { Image3 } from '../components/section_3/image3'

export function Quote() {
  return (
    <section className=" bg-[#313832] py-18 md:pt-30 2xl:pt-40  px-5 md:px-25  xl:px-30  2xl:px-60">
      <section className=" w-full flex flex-col gap-35">
        <div className="text-center z-10 sticky top-50 flex flex-col justify-center items-center gap-5 text-[#F9EBCC] w-full text-shadow-2xs  poppins-bold text-xl md:text-3xl xl:text-3xl 2xl:text-5xl text-wrap">
          <p>"No domamos los rizos; los liberamos".</p>
          <p className="text-xs md:text-sm poppins-regular">
            Chase Nevins, fundadors
          </p>
        </div>
        <Image1></Image1>
        <Image2></Image2>
        <Image3></Image3>
      </section>
    </section>
  )
}
