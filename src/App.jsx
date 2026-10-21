import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'
import HeroPage from './components/HeroPage/HeroPage'
import ProjFirst from './components/ProjFirst/ProjFirst'
import ProjSecond from './components/ProjSecond/ProjSecond'
import ProjThird from './components/ProjThird/ProjThird'
import ProjFourth from './components/ProjFourth/ProjFourth'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import { ROUTES } from './constants/routes'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const lenisRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const lenis = new Lenis({
      duration: 1.1,
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    })

    lenisRef.current = lenis

    const updateScrollTrigger = () => ScrollTrigger.update()
    const animate = (time) => lenis.raf(time * 1000)

    lenis.on('scroll', updateScrollTrigger)
    gsap.ticker.add(animate)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.off('scroll', updateScrollTrigger)
      gsap.ticker.remove(animate)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      window.scrollTo(0, 0)
      lenisRef.current?.scrollTo(0, { immediate: true, force: true })
      ScrollTrigger.refresh()
    })

    return () => window.cancelAnimationFrame(animationFrame)
  }, [pathname])

  return (
    <Routes>
      <Route path={ROUTES.home} element={<HeroPage />} />
      <Route path={ROUTES.projectFirst} element={<ProjFirst />} />
      <Route path={ROUTES.projectSecond} element={<ProjSecond />} />
      <Route path={ROUTES.projectThird} element={<ProjThird />} />
      <Route path={ROUTES.projectFourth} element={<ProjFourth />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App