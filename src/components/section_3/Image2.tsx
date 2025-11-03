import { GS, UseGS } from '../../gsapConfig'

export function Image2() {
  UseGS(() => {
    GS.fromTo(
      '.slideImages2-gs',
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.slideImages2-gs',
          start: 'top 95%',
        },
      }
    )
  }, [])
  return (
    <div className="slideImages2-gs w-full flex justify-start items-center">
      <img
        className="max-w-[200px] md:max-w-[300px] rounded-[2.5rem] shadow-xl"
        src="section_3/Looped-still-01.webp"
        alt="Two wooden brushes with soft bristles placed inside a wooden container, illuminated by natural light."
      />
    </div>
  )
}
