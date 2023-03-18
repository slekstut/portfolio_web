import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

export default function ({ app }, inject) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(MotionPathPlugin)
  inject("gsap", gsap)
}
