'use client'

import { useCallback, useRef, useState } from "react"
import { DataType } from "./Countries"
import Link from "next/link"
import { formatPathName } from "@/utils/formatString"
import CountryWrapper from "./CountryWrapper"

type InfiniteScrollCountriesProps = {
    data: DataType[]
    amount: number
}

export default function InfiniteScrollCountries({ data, amount }: InfiniteScrollCountriesProps) {

    const [endingIndex, setEndingIndex] = useState(() => {
        return amount >= 20 ? 20 : amount
    })

    const observer = useRef<IntersectionObserver | null>(null)

    const lastCountry = useCallback((node: HTMLDivElement) => {
        if (!node) return
        if (observer.current) {
            observer.current.disconnect();
        } 
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {           
                setEndingIndex(prevState => {
                    return prevState + 16 < amount ? prevState + 16 : amount;
                })
            }
        })
        observer.current.observe(node)
    }, [])

    return (
        <>
            {data.slice(0, endingIndex).map((item, i) => (
                <div 
                    key={i}
                    ref={endingIndex - 1 === i ? lastCountry : null}
                >
                    <Link href={`/country/${formatPathName(item.name.common)}`}>   
                        <CountryWrapper 
                            data={item}
                        />
                    </Link>
                </div>
            ))}      
        </>
    )
}