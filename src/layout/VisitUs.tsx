import { Services } from '../components/section_4/Services'
import { Title } from '../components/section_4/Title'
import { GS, UseGS } from '../gsapConfig'

export function VisitUs() {
  UseGS(() => {
    GS.fromTo(
      '.slideUpImgV-gs',
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.slideUpImgV-gs',
          start: 'top 95%',
        },
      }
    )
  }, [])

  return (
    <section className="relative flex flex-col w-full bg-[#B8693D] pt-18 md:pt-30 2xl:pt-40 pb-100 px-5 md:px-25  xl:px-30  2xl:px-60">
      <section className="w-full text-[#F9EBCC] flex flex-col items-start justify-center gap-8">
        <Title></Title>
      </section>
      <img
        className="slideUpImgV-gs absolute w-xs lg:w-sm right-0 top-50 rounded-bl-[2.5rem] rounded-tl-[2.5rem] shadow-xl"
        src="section_4/Looped-portrait-02.webp"
        alt="Persona con cabello afro voluminoso y suéter naranja, mostrando textura y cuidado natural del cabello"
      />
      <section className="flex justify-center items-center w-full pt-30 ">
        <Services></Services>
      </section>
      <img
        className="slideUpImgV-gs absolute w-xs left-0 bottom-60 rounded-br-[2.5rem] rounded-tr-[2.5rem] shadow-xl"
        src="section_4/Looped-portrait-06.webp"
        alt="Persona con cabello rizado corto y gafas blancas, luciendo un estilo moderno y natural"
      />
    </section>
  )
}
