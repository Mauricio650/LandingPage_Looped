import { GS, UseGS } from '../../gsapConfig'

export function Title() {
  UseGS(() => {
    GS.fromTo(
      '.slideUpV-gs',
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.slideUpV-gs',
        },
      }
    )
  }, [])
  return (
    <>
      <h1 className="slideUpV-gs poppins-bold text-shadow-2xs text-6xl md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-8xl">
        ¡Visítanos!
      </h1>
      <p className="slideUpV-gs poppins-regular">
        ¡Comunícate con nosotros y da vida a tus rizos!
      </p>
    </>
  )
}
