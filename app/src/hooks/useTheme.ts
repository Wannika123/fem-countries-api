import { useState, useEffect } from "react";

export default function useTheme() {
    const [theme, setTheme] = useState('')

    const key = 'Theme';

    useEffect(() => {
        let initialTheme = '';

        const themeData = window.localStorage.getItem(key)
        if (themeData) {
            initialTheme = themeData
        } else {
            initialTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
                ? 'dark'
                : 'light'    
        }
        
        setTheme(theme);
        localStorage.setItem(key, initialTheme);
        document.documentElement.className = initialTheme;
    }, [])

    useEffect(() => {
        if (!theme) return

        localStorage.setItem(key, theme);
        document.documentElement.className = theme
    }, [theme])

    return [theme, setTheme] as [string, typeof setTheme]
}