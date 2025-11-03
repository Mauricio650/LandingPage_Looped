import { GS, UseGS } from '../../gsapConfig'

export function Image3() {
  UseGS(() => {
    GS.fromTo(
      '.slideImages3-gs',
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.slideImages3-gs',
          start: 'top 95%',
        },
      }
    )
  }, [])
  return (
    <div className="slideImages3-gs w-full flex justify-end items-center">
      <img
        className="max-w-[300px] md:max-w-[500px] rounded-[2.5rem] shadow-xl"
        src="section_3/Looped-portrait-05.webp"
        alt="A person with short curly hair wearing a dark green turtleneck sweater, closing their eyes and adjusting the collar with both hands."
      />
    </div>
  )
}
