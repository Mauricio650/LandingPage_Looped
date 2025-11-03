import { useRef } from 'react'
import { GS, UseGS } from '../../gsapConfig'
import { Details } from './Details'

export function ListOfDetails() {
  const scrollDetailsRef = useRef(null)
  UseGS(() => {
    GS.fromTo(
      '.slideUpS-gs',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 0.5,
        scrollTrigger: {
          trigger: scrollDetailsRef.current,
        },
      }
    )

    GS.fromTo(
      '.slideSection-gs',
      { y: 70, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.slideSection-gs',
        },
      }
    )
  }, [])
  return (
    <article
      ref={scrollDetailsRef}
      className="flex-1 min-w-[300px] flex flex-col justify-center gap-13 w-full text-shadow-2xs"
    >
      <header>
        <h1 className="poppins-bold  slideUpS-gs text-shadow-2xs poppins-bold text-6xl md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-8xl text-[#313832] text-wrap  ">
          Servicios
        </h1>
      </header>

      <section className=" border-b-1 w-full slideSection-gs">
        <Details
          title={'Cortes de cabello rizado'}
          info={
            'Corte en seco para mantener el patrón natural de tus rizos, mejorar la definición y crear la silueta que quieres.'
          }
          id="first"
        ></Details>
        <Details
          title={'Consultas sobre hidratación'}
          info={
            'Evaluación del estado actual de tu cabello, seguida de un análisis de los tratamientos de hidratación y una rutina sugerida.'
          }
          id="second"
        ></Details>
        <Details
          title={'Productos originales para el cuidado del cabello'}
          info={
            'Fórmulas originales que hidratan, agregan brillo, definen los rizos y protegen el cabello de las impurezas del ambiente.'
          }
          id="third"
        ></Details>
        <Details
          title={'Estilismo para eventos y editorial'}
          info={
            'Colaboración en dirección creativa y desarrollo estético para ocasiones especiales y trabajo editorial de los clientes.'
          }
          id="fourth"
        ></Details>
      </section>
    </article>
  )
}
