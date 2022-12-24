import React, { useState, useEffect } from 'react'
import { genres_list } from '../data/genres' 

type props = {
    genres: number[] 
    font: string
}

const GenresList: React.FC<props> = ({ genres, font }) => {

    const [truncated, setTruncated ] = useState<number[] | []>([])

    useEffect(() => {
        setTruncated(genres.slice(0,3))
    }, [])

    return (
        <ul className='genres-row'
            style={{
                display: 'flex',
                gap: '5px',
                fontSize: font,
                paddingTop: '10px',
                paddingBottom: '10px'
            }}
            >
            {truncated.map((item) => (
                <li className='genre-item'
                    // style={{
                    //     width: '30%',
                    //     textOverflow: 'ellipsis'
                    // }}
                    key={item} >
                    &#183; { genres_list.filter((obj) => { return Number(obj.id) === item})[0].name }
                </li>
            ))}
        </ul>
    )
}
export default GenresList;