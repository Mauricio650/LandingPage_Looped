import { GS, UseGS } from '../../gsapConfig'

export function Information() {
  UseGS(() => {
    GS.to('.text-gs', {
      ease: 'power1.inOut',
      duration: 0.5,
      opacity: 1,
    })
  }, [])
  return (
    <article className="relative z-10 flex flex-col justify-center text-center items-center text-shadow-2xs text-shadow-black text-md font-[500] text-[#F9EBCC] pb-10 md:pb-20">
      <span className="text-gs opacity-0">
        Cra. 51B & Cl. 86, Riomar, Barranquilla, Atlántico, Colombia
      </span>
      <span className="text-gs opacity-0">loompedInfo@Outlook.com</span>
    </article>
  )
}
