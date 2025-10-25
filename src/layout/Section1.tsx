import { Header } from '../components/section_1/Header'

export function Section1() {
  const className: string =
    'relative bg-center bg-no-repeat bg-cover h-[68.5vh] lg:h-[99.8vh] flex flex-col justify-between items-center'
  return (
    <>
      <section
        className={className}
        style={{ backgroundImage: "url('/section_1/Looped-hero.webp')" }}
      >
        {/* opacity to highlight Header against image */}
        <div className="absolute inset-0 bg-black/10"></div>
        <Header></Header>

        <article className="relative z-10 flex flex-col justify-center items-center text-md font-[500] text-[#F9EBCC] pb-20">
          <span>
            Cra. 51B & Cl. 86, Riomar, Barranquilla, Atlántico, Colombia
          </span>
          <span>loompedInfo@Outlook.com</span>
        </article>
      </section>
    </>
  )
}
