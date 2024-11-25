'use client'

import { useEffect, useState } from "react"
import Details from "./Details"

export type DetailsType = {
    name: {
      common: string
      official: string
      nativeName: object
    },
    tld: string[]
    cca3: string
    currencies: {
        [key: string]: {
            name: string
            symbol: string
        }
    }
    // Ex. currencies: { NZD: { name: 'New Zealand dollar', symbol: '$' } },
    capital: string[] 
    region: string
    subregion?: string   // some country doesn't have subregion.
    languages: object
    // Ex. languages: { eng: 'English' },
    borders: string[]
    population: number
    flags: {
        png: string
        svg: string
        alt: string
    }
}

type CountryDetailProps = {
    name: string
    isModal: boolean
}

// Because this component also has to be nested inside a modal which is a client component,
// so can't fetch data on the server
export default function CountryDetails({ name, isModal }: CountryDetailProps) {

    const [detailsData, setDetailsData] = useState<DetailsType[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch data about the details of the country
    const detailsUrl = `https://restcountries.com/v3.1/name/${name.split('-').join('%20')}?fields=name,tld,currencies,capital,region,subregion,languages,population,borders,flags,cca3`
        
    useEffect(() => {
    
        setLoading(true);
        setError('');
        setDetailsData(null);

        fetch(detailsUrl)
            .then(res => {
                if (!res.ok) {
                   throw Error('Failed to fetch country detail') 
                }
                return res.json();
            })
            .then(data => {
                setDetailsData(data);
                setLoading(false);
                setError('');
                console.log(data)
            })
            .catch(err => {
                setLoading(false);
                setError(err.message);
            })
    }, [])   
    
    return (
        <>
            { loading && <p>loading...</p>}
            { error != '' && <p>{error}</p>}
            { detailsData !== null && <Details data={detailsData[0]} isModal={isModal} />} 
        </>
    )
}