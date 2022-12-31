import { useState, useLayoutEffect } from 'react'

export const useTruncate = (text: string) => {

    const [truncatedText, setTruncatedText] = useState('')

    useLayoutEffect(() => {
        setTruncatedText(text.length > 200 ? text.substring(0, 200 - 1) + '...' : text)
    }, [text])

    return truncatedText;
};