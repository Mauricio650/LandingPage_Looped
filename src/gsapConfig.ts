import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

export const GS = gsap
export const UseGS = useGSAP
