import Countries from "@/component/feed/Countries"

type Props = {
    params: {
        query: string
    }
}

export default function ResultPage({ params }: Props) {
    const query = params.query

    return <Countries query={query} />
}