

export const netflixPageQueries = {
    originals:  `/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_networks=213`,
    trendingNow: `/trending/all/week?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    kids: `/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_genres=10762`,
    dramas: `/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_genres=18`,
};

export const tvshowsPageQueries = {
    topRatedTvShows: `/tv/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    animation: `/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_genres=16`,
    comediesTvShows: `/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_genres=35`,
    documentaries: `/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_genres=99`,
};

export const moviesPageQueries = {
    topRatedMovies: `/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    actionMovies: `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=28`,
    comedyMovies: `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=35`,
    horrorMovies: `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=27`
};

const originals = `/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_networks=213`;
const trendings = `/trending/all/week?api_key=${process.env.TMDB_API_KEY}&language=en-US`;
const topRated = `/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US`;
const actions = `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=28`;
const comedies = `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=35`;
const horrors = `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=27`;
const romances = `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=10749`;
const documentaries = `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=99`;


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
