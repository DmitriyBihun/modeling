import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from './Preloader.module.css'

function Preloader({ videoSrc, onComplete }) {
    const progressRef = useRef(null)
    const percentageRef = useRef(null)

    useEffect(() => {
        let isUnmounted = false
        const initialBodyOverflow = document.body.style.overflow
        const initialDocumentOverflow = document.documentElement.style.overflow

        document.body.style.overflow = 'hidden'
        document.documentElement.style.overflow = 'hidden'

        const restoreScroll = () => {
            document.body.style.overflow = initialBodyOverflow
            document.documentElement.style.overflow = initialDocumentOverflow
        }

        const waitForVideo = new Promise((resolve) => {
            const video = document.createElement('video')
            const finish = () => resolve()

            video.preload = 'auto'
            video.src = videoSrc
            video.addEventListener('loadeddata', finish, { once: true })
            video.addEventListener('error', finish, { once: true })
            window.setTimeout(finish, 5000)
        })

        const waitForFonts = (document.fonts?.ready ?? Promise.resolve())
            .catch(() => {})
        const minimumDisplayTime = new Promise((resolve) => {
            window.setTimeout(resolve, 2600)
        })

        const progress = { value: 0 }
        const updateProgress = () => {
            if (!percentageRef.current) return
            percentageRef.current.textContent = Math.round(progress.value)
        }

        const loadingAnimation = gsap.timeline()
            .to(progressRef.current, {
                width: '85vw',
                duration: 2.4,
                ease: 'power3.out',
            })
            .to(progress, {
                value: 85,
                duration: 2.4,
                ease: 'power3.out',
                onUpdate: updateProgress,
            }, 0)

        Promise.all([waitForVideo, waitForFonts, minimumDisplayTime]).then(() => {
            if (isUnmounted) return

            loadingAnimation.kill()

            gsap.to(progressRef.current, {
                width: '100vw',
                duration: 0.65,
                ease: 'power2.out',
            })

            gsap.to(progress, {
                value: 100,
                duration: 0.65,
                ease: 'power2.out',
                onUpdate: updateProgress,
                onComplete: () => {
                    if (isUnmounted) return
                    restoreScroll()
                    onComplete()
                },
            })
        })

        return () => {
            isUnmounted = true
            loadingAnimation.kill()
            restoreScroll()
        }
    }, [onComplete, videoSrc])

    return (
        <section className={styles.preloader} aria-label="Loading Lumière">
            <div ref={progressRef} className={styles.progressBar} aria-live="polite">
                <p>Loading</p>
                <p ref={percentageRef}>0</p>
            </div>

            <p className={styles.projectName}>Lumière</p>
        </section>
    )
}

export default Preloader
