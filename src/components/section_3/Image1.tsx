import { GS, UseGS } from '../../gsapConfig'

export function Image1() {
  UseGS(() => {
    GS.fromTo(
      '.slideImages-gs',
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.slideImages-gs',
          start: 'top 95%',
        },
      }
    )
  }, [])
  return (
    <div className="slideImages-gs w-full flex justify-center items-center">
      <img
        className="max-w-[300px] md:max-w-[500px] rounded-[2.5rem] shadow-xl"
        src="section_3/Looped-portrait-04.webp"
        alt="Man with short blond hair and white shirt standing outdoors with eyes closed, enjoying the calm atmosphere"
      />
    </div>
  )
}
