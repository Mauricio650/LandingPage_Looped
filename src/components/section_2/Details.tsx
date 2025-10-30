import { useState } from 'react'
import { GS } from '../../gsapConfig'

interface Props {
  info: string
  title: string
  id: string
}

export function Details({ info, title, id }: Props) {
  const [showDetails, setShowDetails] = useState(true)
  const handleOpenSummary = () => {
    if (showDetails) {
      GS.to(`#${id}-stick-gs`, {
        rotate: '90deg',
        ease: 'power1.inOut',
        opacity: 0,
        duration: 0.4,
      })

      GS.to(`#${id}-info-gs`, {
        ease: 'power1.inOut',
        opacity: 1,
        duration: 0.5,
        height: 'auto',
      })
    } else {
      GS.to(`#${id}-stick-gs`, {
        rotate: '0deg',
        ease: 'power1.inOut',
        opacity: 1,
        duration: 0.4,
      })

      GS.to(`#${id}-info-gs`, {
        ease: 'power1.inOut',
        opacity: 0,
        duration: 0.5,
        height: '0px',
        overflow: 'hidden',
      })
    }
  }
  return (
    <details className="group border-t-1 py-5 poppins-regular">
      <summary
        onClick={() => {
          setShowDetails(p => !p)
          handleOpenSummary()
        }}
        className="list-none cursor-pointer flex justify-between items-center  "
      >
        <span>{title}</span>
        <div className="relative">
          <div className="w-4 h-[0.5px] bg-black"></div>
          <div
            id={`${id}-stick-gs`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[0.5px] h-4  bg-black"
          ></div>
        </div>
      </summary>
      <div id={`${id}-info-gs`} className=" mt-6 h-0 overflow-hidden opacity-0">
        {info}
      </div>
    </details>
  )
}
