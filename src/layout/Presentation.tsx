import { useState } from 'react'
import { Header } from '../components/section_1/Header'
import { GS, UseGS } from '../gsapConfig'
import { Information } from '../components/section_1/Information'

export function Presentation() {
  const [showMenu, setShowMenu] = useState(false)
  const className: string =
    'relative bg-center bg-no-repeat bg-cover h-[68.5vh] lg:h-[100vh] flex flex-col justify-between items-center'

  UseGS(() => {
    if (!showMenu) return
    GS.to('.menuText-gs', {
      ease: 'power1.inOut',
      duration: 0.5,
      opacity: 1,
      y: 0,
    })
  }, [showMenu])

  const handleShowMenu = () => {
    setShowMenu(p => !p)
    document.body.style.overflow = 'hidden'
  }

  return (
    <>
      {/* burger menu for smaller screens */}
      {showMenu && (
        <section className="fixed z-11 inset-0 w-screen h-screen bg-[#A2B6A2] text-black font-semibold text-3xl">
          <nav className="w-full h-full flex  justify-start center items-center p-20">
            <ul className="flex justify-center items-start gap-2 flex-col">
              <li className="menuText-gs opacity-0 translate-y-5 cursor-pointer hover:text-[#fbf8f1]">
                Citas
              </li>
              <li className="menuText-gs opacity-0 translate-y-5 cursor-pointer hover:text-[#fbf8f1]">
                Tienda
              </li>
            </ul>
          </nav>
        </section>
      )}

      <section
        className={className}
        style={{ backgroundImage: "url('section_1/Looped-hero.webp')" }}
      >
        {/* opacity to highlight Header against image */}
        <div className="absolute inset-0 bg-black/10"></div>
        <Header handleShowMenu={handleShowMenu}></Header>
        <Information></Information>
      </section>
    </>
  )
}
