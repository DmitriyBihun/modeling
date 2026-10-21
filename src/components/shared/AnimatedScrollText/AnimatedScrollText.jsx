import { useLayoutEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './AnimatedScrollText.module.css'

gsap.registerPlugin(ScrollTrigger)

function getTextParts(text) {
    let letterIndex = 0
    const parts = text
        .split(/(\s+)/)
        .filter(Boolean)
        .map((part, partIndex) => {
            if (/^\s+$/.test(part)) {
                return { content: part, key: `space-${partIndex}`, type: 'space' }
            }

            const letters = Array.from(part, (character) => ({
                character,
                index: letterIndex++,
            }))

            return { letters, key: `word-${partIndex}`, type: 'word' }
        })

    return { letterCount: letterIndex, parts }
}

function AnimatedScrollText({ text, className, Tag = 'p' }) {
    const containerRef = useRef(null)
    const lettersRef = useRef([])
    const { letterCount, parts } = useMemo(() => getTextParts(text), [text])

    const letterRefCallbacks = useMemo(
        () => Array.from({ length: letterCount }, (_, index) => (element) => {
            lettersRef.current[index] = element
        }),
        [letterCount],
    )

    useLayoutEffect(() => {
        const letters = lettersRef.current.slice(0, letterCount).filter(Boolean)
        if (!letters.length) return undefined

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            gsap.set(letters, { opacity: 1 })
            return undefined
        }

        const context = gsap.context(() => {
            gsap.to(letters, {
                opacity: 1,
                ease: 'none',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    scrub: true,
                    start: 'top 50%',
                    end: 'bottom 40%',
                },
            })
        }, containerRef)

        return () => context.revert()
    }, [letterCount, text])

    return (
        <Tag className={className} ref={containerRef}>
            {parts.map((part) => {
                if (part.type === 'space') return part.content

                return (
                    <span key={part.key} className={styles.word}>
                        {part.letters.map(({ character, index }) => (
                            <span
                                key={`letter-${index}`}
                                ref={letterRefCallbacks[index]}
                                className={styles.letter}
                            >
                                {character}
                            </span>
                        ))}
                    </span>
                )
            })}
        </Tag>
    )
}

export default AnimatedScrollText
