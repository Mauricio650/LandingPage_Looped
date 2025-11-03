import { useRef } from 'react'
import { GS, UseGS } from '../../gsapConfig'

export function ImageServices() {
  const scrollRef = useRef(null)

  UseGS(() => {
    GS.fromTo(
      '.slideUpImgS-gs',
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 0.5,
        scrollTrigger: {
          trigger: scrollRef.current,
          start: 'top 95%',
        },
      }
    )
    GS.fromTo(
      '.slideUpS2-gs',
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'power1.inOut',
        duration: 0.5,
        scrollTrigger: {
          trigger: '.slideUpS2-gs',
          start: 'top 95%',
        },
      }
    )
  }, [])

  return (
    <section className="w-1/2  mt-10 md:mt-30 lg:mt-40 flex justify-center items-center">
      <div className="relative">
        <img
          ref={scrollRef}
          className="slideUpImgS-gs relative ml-6 max-w-[218px] z-5 md:z-0  md:max-w-[300px] xl:max-w-[500px] 2xl:max-w-[700px] rounded-[2.5rem] shadow-xl"
          src="section_2/Looped-Portraits-07.webp"
          alt="A man with short curly brown hair wearing a ribbed olive-green turtleneck sweater, posing in front of a dark green textured background."
        />
        <img
          className="slideUpS2-gs max-w-[175px] -bottom-30 -right-30  md:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[400px] md:-bottom-40 2xl:-bottom-50 md:-left-23 2xl:-left-20 absolute rounded-[2.5rem] shadow-xl"
          src="section_2/Looped-stills-02.webp"
          alt="A translucent wavy comb leaning against a smooth oval pumice stone, both placed on top of a textured brown block with a neutral beige background."
        />
      </div>
    </section>
  )
}
