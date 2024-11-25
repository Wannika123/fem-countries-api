import styles from './Countries.module.css'
import { formatQuery } from "@/utils/formatString"
import { fetchData } from "@/utils/fetchData"
import { Suspense } from "react"
import InfiniteScrollCountries from "./InfiniteScrollCountries"

export type RegionType = 'africa' | 'america' | 'antarctic' | 'asia' | 'europe' | 'oceania'

export const REGIONS: RegionType[] = ['africa', 'america', 'antarctic', 'asia', 'europe', 'oceania']

export type DataType = {
    name: {
      common: string
      official: string
      nativeName: object
    }
    capital: string[] 
    region: string
    population: number
    flags: {
        png: string
        svg: string
        alt: string
    }
} 

type CountriesProps = {
    query: string | undefined
}

export default async function Countries({ query = undefined }: CountriesProps) {

    let queryStr = '';

    const regionsArr: string[] = REGIONS  // avoid TS error in if check

    if (!query) {
        queryStr = 'all'
    } else {
        if (regionsArr.indexOf(query) >= 0) {
            queryStr = `region/${query}`
        } else {
            queryStr = `name/${formatQuery(query)}`
        }        
    }

    const url = `https://restcountries.com/v3.1/${queryStr}?fields=name,capital,region,population,flags`

    const data: DataType[] | undefined = await fetchData(url);

    if (!data || data.length === 0) {
        return <p>No country found</p>
    }

    return (
        <div className={styles.container}>
            <Suspense fallback={<p>loading...</p>}>
                <InfiniteScrollCountries data={data} amount={data.length} />  
            </Suspense>  
        </div>
    )
}