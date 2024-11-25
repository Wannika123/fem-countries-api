import Image from "next/image"
import styles from './CountryWrapper.module.css'
import { formatNumber } from "@/utils/formatNumber"
import { DataType } from "./Countries"
// import { addBlurDataUrl } from "@/utils/addBlurData"

export type DataWithBlur = DataType & {
    blurDataUrl: string | undefined
}

type CountryWrapperProps = {
    data: DataType
}

export default function CountryWrapper({ data }: CountryWrapperProps) {

    // const dataWithBlur = await addBlurDataUrl(data)

    return (
        <div className={styles.container}>          
            <Image                
                src={data.flags.png}
                alt={data.flags.alt}
                // blurDataURL={dataWithBlur.blurDataUrl}
                // placeholder="blur"
                width={264}
                height={160}
                style={{objectFit: 'cover'}}
            />
            <div className={styles['text-container']}>
                <h2>{data.name.common}</h2>
                <p><span className={styles['semi-bold']}>Population:</span> {formatNumber(data.population)}</p>
                <p><span className={styles['semi-bold']}>Region:</span> {data.region}</p>
                <p><span className={styles['semi-bold']}>Capital:</span> {data.capital.join(', ')}</p>
            </div>
        </div>
    )
}