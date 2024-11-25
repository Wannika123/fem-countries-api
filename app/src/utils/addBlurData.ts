import { getPlaiceholder } from "plaiceholder";
import { DataType } from "@/component/feed/Countries";
import { DataWithBlur } from "@/component/feed/CountryWrapper";

async function getBase64(flagUrl: string) {
    try {
        const res = await fetch(flagUrl)

        if (!res.ok) {
            throw new Error('Failed to fetch blurDataUrl')
        }

        const buffer = await res.arrayBuffer()

        const { base64 } = await getPlaiceholder(Buffer.from(buffer))

        console.log(base64)
        return base64
    } catch (e) {
        if (e instanceof Error) console.log(e.message)
    }
}

export async function addBlurDataUrl(data: DataType): Promise<DataWithBlur> {
    const base64Result = await getBase64(data.flags.png)

    const dataWithBlur = {...data, blurDataUrl: base64Result }

    return dataWithBlur
}