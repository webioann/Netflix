export const originals = `/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_networks=213`;
export const trendings = `/trending/all/week?api_key=${process.env.TMDB_API_KEY}&language=en-US`;
export const topRated = `/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US`;
export const actions = `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=28`;
export const comedies = `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=35`;
export const horrors = `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=27`;
export const romances = `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=10749`;
export const documentaries = `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=99`;


const search_movie_MEG = 'https://api.themoviedb.org/3/search/movie?query=meg&include_adult=false&language=en-US&page=1';
const search_tv_ALF = 'https://api.themoviedb.org/3/search/tv?query=alf&include_adult=false&language=en-US&page=1'
const search_collection_WAR = 'https://api.themoviedb.org/3/search/collection?query=war&include_adult=false&language=en-US&page=1'
const search_multy_ALIEN = 'https://api.themoviedb.org/3/search/multi?query=alien&include_adult=false&language=en-US&page=1'

const trending_movie = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US'

const wrong_movie_details_response = {
    "success": false,
    "status_code": 34,
    "status_message": "The resource you requested could not be found."
};

const movie_details = 'https://api.themoviedb.org/3/movie/335977?language=en-US'
const TV_details = 'https://api.themoviedb.org/3/tv/113962?language=en-US'

