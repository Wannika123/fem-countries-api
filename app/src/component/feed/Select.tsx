'use client'

import styles from './Select.module.css'
import { RegionType, REGIONS } from './Countries'
import { capitalized } from '@/utils/formatString'
import { useEffect, useRef, useState } from 'react'

type SelectProps = {
    value: RegionType | ''
    search: (region: RegionType) => void
}

export default function Select({ value, search }: SelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isOpen) {
            setHighlightedIndex(0)
        }
    }, [isOpen])

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.target !== containerRef.current) return

            switch(e.code) {
                case "Enter":
                case "Space":
                    if (isOpen) {
                        search(REGIONS[highlightedIndex])
                    }
                    setIsOpen(prevState => !prevState)
                    break;
                case "ArrowUp":
                case "ArrowDown": {
                    if (!isOpen) {
                        setIsOpen(true);
                        break;
                    }
                    const newIndex = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1)
                    if (newIndex >= 0 && newIndex < REGIONS.length) {
                        setHighlightedIndex(newIndex)
                    }
                    break;
                }
                case "Escape":
                    setIsOpen(false)
                    break;
            }
        }
        containerRef.current?.addEventListener('keydown', handler);

        return () => {
            containerRef.current?.removeEventListener('keydown', handler);
        }
    }, [isOpen, highlightedIndex])

    return (
        <div 
            className={styles.container}
            ref={containerRef}
            onClick={() => setIsOpen(state => !state)}
            onBlur={() => setIsOpen(false)}
            tabIndex={4}
        >
            <span className={styles.value}>{value !== '' ? capitalized(value) : 'Filter by Region'}</span>
            <svg className={isOpen ? styles['arrow-up'] : styles['arrow-down']} xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
            <ul className={`${styles.regions} ${isOpen ? styles.show : ''}`}>
                {REGIONS.map((region, i) => (
                    <li 
                        key={i}
                        onClick={() => search(region)}
                        onMouseEnter={() => setHighlightedIndex(i)}
                        className={highlightedIndex === i ? styles.highlighted : undefined}
                    >
                        {capitalized(region)}
                    </li>
                ))}
            </ul>
        </div>
    )
}