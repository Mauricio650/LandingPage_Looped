import { useRef } from 'react'
import { GS, UseGS } from '../../gsapConfig'

export function ImageBooking() {
  const scrollRef = useRef(null)

  UseGS(() => {
    GS.fromTo(
      '.slideUpImg-gs',
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 0.5,
        scrollTrigger: {
          trigger: scrollRef.current,
          start: 'top 95%',
        },
      }
    )
    GS.fromTo(
      '.slideUpb-gs',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.slideUpb-gs',
          start: 'top 95%',
        },
      }
    )
  }, [])
  return (
    <section ref={scrollRef} className="flex flex-col gap-10">
      <img
        className="slideUpImg-gs md:w-[850px]  xl:w-[900px] rounded-[2.5rem] shadow-xl"
        src="/public/section_2/Looped-portrait-04.webp"
        alt="A man with fair curly hair posing outdoors with his arm raised against a blue sky background."
      />
      <button className="bg-[#A2B6A2] slideUpb-gs flex justify-center items-center cursor-pointer md:w-[300px] 2xl:w-[650px] w-full md:hidden poppins-regular hover:bg-[#A2B6A2]/70 rounded-full py-3 md:py-1 lg:py-5">
        Reservar ahora
      </button>
    </section>
  )
}
