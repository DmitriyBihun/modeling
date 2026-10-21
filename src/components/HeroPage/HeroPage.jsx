import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import heroVideo from '../../assets/video.mp4'
import { projects } from '../../data/projects'
import AboutSection from './AboutSection/AboutSection'
import ConceptSection from './ConceptSection/ConceptSection'
import TocSection from './TocSection/TocSection'
import Projects from './Projects/Projects'
import Preloader from '../shared/Preloader/Preloader'
import styles from './HeroPage.module.css'

gsap.registerPlugin(CustomEase)

const PRELOADER_STORAGE_KEY = 'lumiere-preloader-shown'
const logoCharacters = Array.from('Lumière')
const placeholderText = 'Luminous journey through art culture memory motion light intuition curiosity detail contrast form sound emotion'

function hasSeenPreloader() {
    return sessionStorage.getItem(PRELOADER_STORAGE_KEY) === 'true'
}

function HeroPage() {
    const [isInitialVisit] = useState(() => !hasSeenPreloader())
    const [shouldShowPreloader, setShouldShowPreloader] = useState(isInitialVisit)
    const heroRef = useRef(null)
    const videoContainerRef = useRef(null)
    const logoRef = useRef(null)
    const headerTextRefs = useRef([])
    const characterRefs = useRef([])

    const finishPreloader = useCallback(() => {
        sessionStorage.setItem(PRELOADER_STORAGE_KEY, 'true')
        setShouldShowPreloader(false)
    }, [])

    useLayoutEffect(() => {
        if (shouldShowPreloader || !isInitialVisit) return undefined

        const animation = gsap.context(() => {
            const customEase = CustomEase.create('lumiereHeroEase', '.87, 0, .13, 1')
            const animatedCharacters = characterRefs.current.slice(1)

            gsap.set(heroRef.current, {
                clipPath: 'polygon(0% 45%, 100% 45%, 100% 55%, 0% 55%)',
            })
            gsap.set(videoContainerRef.current, {
                scale: 0,
                rotation: -20,
            })
            gsap.set(logoRef.current, {
                left: '50%',
                xPercent: -50,
            })
            gsap.set(animatedCharacters, {
                xPercent: 0,
                yPercent: 0,
            })
            gsap.set(headerTextRefs.current, { yPercent: 100 })

            const timeline = gsap.timeline()

            timeline.to(heroRef.current, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: 1,
                ease: customEase,
            })

            timeline.to(videoContainerRef.current, {
                scale: 1,
                rotation: 0,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: 1.25,
                ease: customEase,
            }, 0)

            timeline.to(logoRef.current, {
                left: '0%',
                xPercent: 0,
                duration: 1.25,
                ease: customEase,
            }, 0)

            timeline.to(animatedCharacters, {
                yPercent: 100,
                duration: 1,
                stagger: -0.075,
                ease: customEase,
            }, 0)

            timeline.to(animatedCharacters, {
                xPercent: -1200,
                duration: 1,
                ease: customEase,
            }, 0.25)

            timeline.to(headerTextRefs.current, {
                yPercent: 0,
                duration: 1,
                stagger: 0.125,
                ease: 'power3.out',
            }, 0.2)
        }, heroRef)

        return () => animation.revert()
    }, [isInitialVisit, shouldShowPreloader])

    return (
        <>
            {shouldShowPreloader && (
                <Preloader videoSrc={heroVideo} onComplete={finishPreloader} />
            )}

            <section ref={heroRef} className={styles.hero} aria-label="Lumiere introduction">
                <div className={styles.videoContainer} ref={videoContainerRef}>
                    <video autoPlay loop muted playsInline preload="auto">
                        <source src={heroVideo} type="video/mp4" />
                    </video>
                </div>

                <nav className={styles.navigation} aria-label="Hero navigation">
                    <span aria-hidden="true">●</span>
                    <span aria-hidden="true">●</span>
                </nav>

                <div className={styles.header}>
                    <h1><span ref={(element) => { headerTextRefs.current[0] = element }}>Reveal your</span></h1>
                    <h1><span ref={(element) => { headerTextRefs.current[1] = element }}>true beauty.</span></h1>
                    <p><span ref={(element) => { headerTextRefs.current[2] = element }}>{placeholderText}</span></p>
                </div>

                <footer className={styles.footer}>
                    {projects.map((project) => (
                        <Link key={project.id} to={project.path}>
                            {'\\'}{project.title}
                        </Link>
                    ))}
                </footer>
            </section>

            <div className={styles.logo} aria-label="Lumiere" ref={logoRef}>
                {logoCharacters.map((character, index) => (
                    <div className={styles.character} key={`${character}-${index}`}>
                        <span ref={(element) => { characterRefs.current[index] = element }}>{character}</span>
                    </div>
                ))}
            </div>

            <AboutSection />
            <Projects />
            <ConceptSection />
            <TocSection />

        </>
    )
}

export default HeroPage
