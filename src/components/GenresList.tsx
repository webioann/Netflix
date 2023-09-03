import React, { useState, useEffect } from 'react'
import { genres_list } from '../data/genres_list' 

type props = {
    genres: number[] 
    font: number
}

const GenresList: React.FC<props> = ({ genres, font }) => {

    const [truncated, setTruncated ] = useState<number[] | []>([])

    useEffect(() => {
        if(genres) {
            if(genres.length > 3) {
                setTruncated(genres.slice(0,3))
            }
            else{ setTruncated([...genres])}
        }
        else return
    }, [])

    return (
        <ul className='genres-row'
            style={{
                display: 'flex',
                gap: `${font / 2}px`,
                fontSize: `${font}px`,
                paddingTop: `${font / 2}px`,
            }}
            >
            {truncated.map((item) => (
                <li className='genre-item'
                    style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    key={item} >
                    <span style={{
                        width: `${font / 3}px`,
                        height: `${font / 3}px`,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        marginRight: `${font / 2}px`
                    }}/>
                    <p>{ genres_list.filter((obj) => { return Number(obj.id) === item })[0].name }</p>
                </li>
            ))}
        </ul>
    )
}

export default GenresList;
// &#183; it is a dot simbol