import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './ProjectHeroSection.module.css'
import HeaderBlock from '@/components/shared/HeaderBlock/HeaderBlock'

gsap.registerPlugin(ScrollTrigger)

function ProjectHeroSection({ headerLeft, headerRight = 'CONTACT', imageSrc, imageAlt = 'Overview model', title }) {
    const sectionRef = useRef(null)
    const imageRef = useRef(null)
    const titleRef = useRef(null)

    useLayoutEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return undefined
        }

        const context = gsap.context(() => {
            gsap.to(imageRef.current, {
                yPercent: -15,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            })

            gsap.to(titleRef.current, {
                yPercent: -32,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            })
        }, sectionRef)

        return () => context.revert()
    }, [])

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className={styles.container}>
                <HeaderBlock
                    left={headerLeft}
                    right={headerRight}
                />

                <div className={styles.mainContent}>
                    <div className={styles.imageContainer}>
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            ref={imageRef}
                            className={styles.image}
                        />
                    </div>
                    <h1 ref={titleRef} className={styles.title}>{title}</h1>
                </div>

                
            </div>
        </section>
    );
}

export default ProjectHeroSection;
