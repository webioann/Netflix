
export const useTextTruncate = (maxLength: number, text: string) => {

    let truncatedText = 
        text.length > maxLength ? text.substring(0, maxLength - 1) + '...' : text
        
    return truncatedText
};

