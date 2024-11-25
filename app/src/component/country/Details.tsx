import Image from "next/image"
import styles from './Details.module.css'
import { DetailsType } from "./CountryDetails"
import { formatPathName } from "@/utils/formatString"
import { formatNumber } from "@/utils/formatNumber"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

type BordersType = {
    name: {
        common: string
        official: string
        nativeName: object
    }
}

type DetailsProps = {
    data: DetailsType
    isModal: boolean
}

type CurrenciesType = {
    [key: string]: {
        name: string
    }
}

export default function Details({ data, isModal }: DetailsProps) {
    
    const [bordersData, setBordersData] = useState<BordersType[] | null>(null)

    const router = useRouter();

    const moveCountry = (query: string) => {
        if (isModal) {   // Because a modal will be closed with router.back()
            router.replace(`/country/${query}`)
            return
        }
        router.push(`/country/${query}`)
    }
    
    let currenciesArr = [];

    let key: string;
    for (key in data.currencies) {
        currenciesArr.push(data.currencies[key].name)       
    }

    useEffect(() => {      
        const borderCountries = data.borders;
        const bordersUrl = `https://restcountries.com/v3.1/alpha?codes=${borderCountries.join(',')}&fields=name`
        fetch(bordersUrl)
            .then(res => {
                if (!res.ok) {
                    throw Error('Failed to fetch border countries')
                }
                return res.json()
            })
            .then(data => setBordersData(data))
            .catch(e => console.log(e.message))        
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles['grid-container']}>
                <div className={styles['img-container']}>
                    <Image 
                        src={data.flags.png}
                        alt={data.flags.alt}
                        width={280}
                        height={200}
                    />
                </div>
                <div className={styles['text-container']}>
                    <h2>{data.name.common}</h2>
                    <div className={styles['description-wrapper']}>
                        <div className={styles['first-div']}>
                            <p><span className={styles['semi-bold']}>Official Name:</span> {data.name.official}</p>
                            <p><span className={styles['semi-bold']}>Population:</span> {formatNumber(data.population)}</p>
                            <p><span className={styles['semi-bold']}>Region:</span> {data.region}</p>
                            <p><span className={styles['semi-bold']}>Sub Region:</span> {data.subregion}</p>
                            <p><span className={styles['semi-bold']}>Capitals:</span> {data.capital.join(', ')}</p>
                        </div>
                        <div className={styles['second-div']}>
                            <p><span className={styles['semi-bold']}>Top Level Domain:</span> {data.tld[0]}</p>
                            <p><span className={styles['semi-bold']}>Currencies:</span> {currenciesArr.join(', ')}</p> 
                            <p><span className={styles['semi-bold']}>Languages:</span> {Object.values(data.languages).join(', ')}</p>
                        </div>
                    </div>
                    
                    <div className={styles['border-wrapper']}>
                        <h3>Border Countries:</h3>

                        <div className={styles['border-btns-container']}>
                            {bordersData?.map((item, i) => (
                                <button key={i} onClick={() => moveCountry(formatPathName(item.name.common))}>
                                    {item.name.common}
                                </button>                           
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}