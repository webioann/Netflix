import { useState, useEffect, useRef } from 'react'

export const useMatchMedia = (width: string) => {

    const [isMatch, setIsMatch] = useState(false)
    const mediaRef = useRef<MediaQueryList | null>(null)

    useEffect(() => {
        mediaRef.current = window.matchMedia(`(min-width: ${width})`)
        const initialMatch = mediaRef.current.matches

        initialMatch ? setIsMatch(true) : setIsMatch(false)

        const ifMatch = (event: MediaQueryListEvent) => {
            event.matches ? setIsMatch(true) : setIsMatch(false)
        }
        
        // return () => {mediaRef.current.addListener(ifMatch)}
    
    }, [width])

    return isMatch
};    