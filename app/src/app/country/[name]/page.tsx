import CountryDetails from "@/component/country/CountryDetails";

type Props = {
    params: {
        name: string
    }
}

export default function CountryPage({ params }: Props) {
    const name = params.name;

    return (        
        <CountryDetails name={name} isModal={false} />
    )
}