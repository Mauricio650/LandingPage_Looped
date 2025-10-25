import { useState } from 'react'
import { UseGS, GS } from '../../gsapConfig'

interface Props {
  handleShowMenu: () => void
}

export function Header({ handleShowMenu }: Props) {
  const [handleMenu, setHandleMenu] = useState(false)
  UseGS(() => {
    GS.to('.text-gs', {
      ease: 'power1.inOut',
      opacity: 1,
      y: 0,
      duration: 0.5,
    })
  }, [])

  const toggleMenu = () => {
    if (handleMenu) {
      GS.to('.stickTOP-gs', {
        duration: 0.2,
        ease: 'circ.inOut',
        transformOrigin: 'center center',
        rotation: 60,
        y: 6,
        width: '30px',
        background: 'black',
      })

      GS.to('.stickBOTTOM-gs', {
        duration: 0.2,
        ease: 'circ.inOut',
        transformOrigin: 'center center',
        rotation: -60,
        y: -6,
        width: '30px',
        background: 'black',
      })

      GS.to('.cart-gs ', {
        color: 'black',
      })
    } else {
      GS.to('.stickTOP-gs', {
        duration: 0.2,
        ease: 'circ.inOut',
        rotation: 0,
        background: '#F9EBCC',
        width: '40px',
        y: 0,
      })

      GS.to('.stickBOTTOM-gs', {
        duration: 0.2,
        ease: 'circ.inOut',
        background: '#F9EBCC',
        width: '40px',
        rotation: 0,
        y: 0,
      })

      GS.to('.cart-gs ', {
        color: '#F9EBCC',
      })
    }
  }
  toggleMenu()
  return (
    <header className="relative z-12 w-full flex justify-between items-center font-semibold lg:px-20 xl:px-35 2xl:px-50 py-12 text-shadow-2xs text-shadow-black text-lg text-[#F9EBCC]">
      <nav className="hidden xl:block ">
        <ul className="flex justify-center items-center gap-10">
          <li className="text-gs opacity-0 translate-y-3 cursor-pointer hover:text-[#fbf8f1]">
            Citas
          </li>
          <li className="text-gs opacity-0 translate-y-3 cursor-pointer hover:text-[#fbf8f1]">
            Tienda
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          setHandleMenu(p => !p)
          handleShowMenu()
        }}
        className="cursor-pointer text-gs translate-y-3 xl:hidden  opacity-0 flex flex-col items-center justify-center gap-[10.4px]"
      >
        <div className="stickTOP-gs h-0.5 w-10 bg-[#F9EBCC] "></div>
        <div className="stickBOTTOM-gs h-0.5 w-10 bg-[#F9EBCC] "></div>
      </button>

      <img
        className="text-gs lg:w-[440px] cursor-pointer opacity-0 translate-y-20 filter drop-shadow-xs drop-shadow-black/50"
        src="logo/Looped.webp"
        alt="Logo of looped. Looped is the name of hair salon"
      />

      <span className="cursor-pointer text-gs translate-y-3 hidden xl:block  opacity-0 hover:text-[#fbf8f1]">
        {'Carrito (0)'}
      </span>
      <span className="cart-gs cursor-pointer text-gs translate-y-3 xl:hidden  opacity-0 hover:text-[#fbf8f1]">
        {'(0)'}
      </span>
    </header>
  )
}
