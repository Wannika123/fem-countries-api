'use client'

import { useState, FormEvent, useEffect } from 'react'
import styles from './Navbar.module.css'
import { useRouter } from 'next/navigation';
import { formatPathName } from '@/utils/formatString';
import Select from './Select';
import { RegionType } from './Countries';

export default function Navbar() {
    const [inputVal, setInputVal] = useState('');
    const [selectVal, setSelectVal] = useState<RegionType | ''>('');

    const router = useRouter()

    const searchByName = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (inputVal) {
            router.push(`/feed/results/${formatPathName(inputVal)}`)
            setInputVal('')
            setSelectVal('')
        } 
    }

    const searchByRegion = (region: RegionType) => {
        setSelectVal(region);   
        // to be continued in useEffect()     
    }

    useEffect(() => {
        if (selectVal) {
            router.push(`/feed/results/${selectVal}`)
        }
    }, [selectVal])

    return (
        <div className={styles.container}>
            <form onSubmit={searchByName}>
                <div className={styles['input-container']}>
                    <input 
                        type="text"
                        placeholder='Search for a country...'
                        value={inputVal}
                        onChange={e => setInputVal(e.target.value)}
                        tabIndex={3}
                    />
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                </div>                          
            </form>
            <Select 
                value={selectVal}
                search={searchByRegion}
            />    
        </div>
    )
}