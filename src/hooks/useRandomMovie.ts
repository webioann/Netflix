import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { IMovie } from "../types/movies.types";


export const useRandomMovie = (data: IMovie[]) => {

    const [randomMovie, setRandomMovie] = useState<IMovie | {}>({})

    useEffect(() => {
        if(data) {
            let idx = Math.floor(Math.random() * data.length - 1)
            let imgPath = data[idx]?.backdrop_path
                ? data[idx]?.backdrop_path
                : data[idx]?.poster_path
            let choosedName = data[idx]?.name
                ? data[idx]?.name
                : data[idx]?.original_name
            let customOverview = data[idx]?.overview
                ? data[idx]?.overview
                : 'Curvy, curly, confident Mich knows she is fabulous'

            setRandomMovie({
                img: `https://image.tmdb.org/t/p/original/${imgPath}`,
                name: choosedName,
                overview: customOverview,
                id: data[idx]?.id
            })
            // console.log(data[idx]);
        }
    }, [data])

    return randomMovie
};