// server-side data fetching

type DataType = {
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

export async function fetchData(url: string): Promise<DataType[] | undefined> {
    try {
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error('Failed to fetch countries data')
        }
        const data: DataType[] = await res.json();

        if (data.length === 0) return undefined
        
        return data
    } catch (e) {
        if (e instanceof Error) console.log(e.message)
    }
}