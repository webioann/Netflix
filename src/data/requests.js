// const lang = "en-US";

export const requestsPath = {
    trendings: `/trending/all/week?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    originals: `/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_networks=213`,
    topRated: `/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    actions: `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=28`,
    comedies: `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=35`,
    horrors: `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=27`,
    romances: `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=10749`,
    documentaries: `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=99`,


};