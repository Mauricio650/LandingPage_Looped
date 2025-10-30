import { useRef } from 'react'
import { GS, UseGS } from '../../gsapConfig'

export function TextBooking() {
  const scrollRef = useRef(null)
  UseGS(() => {
    GS.fromTo(
      '.slideUp-gs',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 0.5,
        scrollTrigger: {
          trigger: scrollRef.current,
        },
      }
    )

    GS.fromTo(
      '.slideUpButton-gs',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.slideUpButton-gs',
        },
      }
    )
  }, [])
  return (
    <section
      ref={scrollRef}
      className="flex flex-col justify-between lg:py-12 py-8"
    >
      <div className="flex flex-col gap-5 2xl:gap-10">
        <h2 className="slideUp-gs text-shadow-2xs  translate-y-20 opacity-0 poppins-bold text-6xl md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-8xl text-[#313832] text-wrap ">
          Rizos definidos sin estrés
        </h2>
        <p className="slideUp-gs translate-y-10 text-shadow-2xs  opacity-0 poppins-regular text-wrap">
          Looped es un salón especializado en el cabello que se riza, forma
          espirales, se ondea, se arremolina y forma bucles.
        </p>
      </div>

      <button className="bg-[#A2B6A2] slideUpButton-gs text-shadow-2xs  translate-y-10 opacity-0 md:flex justify-center items-center cursor-pointer hidden md:w-[300px] 2xl:w-[650px] w-full poppins-regular hover:bg-[#A2B6A2]/70 rounded-full md:py-1 lg:py-5">
        Reservar ahora
      </button>
    </section>
  )
}
