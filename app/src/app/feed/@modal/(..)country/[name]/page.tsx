'use client'

import CountryDetails from "@/component/country/CountryDetails";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

type Props = {
    params: {
        name: string
    }
}

export default function CountryPageModal({ params }: Props) {
    const name = params.name;
    const ref = useRef<HTMLDialogElement>(null)

    const router = useRouter()

    useEffect(() => {
        if (ref.current) {
            ref.current.showModal()
        }
    }, [])

    return (       
        <dialog ref={ref}>  
            <div>  
                <button 
                    className="full-screen-btn" 
                    onClick={() => location.reload()}
                >   
                    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero"><path d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z"/></g></svg>
                    full screen
                </button>  
                <button className="close-btn" onClick={router.back}>&times;</button>    
                <CountryDetails name={name} isModal={true} />  
            </div>               
        </dialog>
    )
}