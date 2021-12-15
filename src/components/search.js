import { Link } from "react-router-dom"
import Hero from "./hero"
// bc3173ce9fa7cf4c415ed4ff68c3ca63
// https://api.themoviedb.org/3/search/movie?api_key=bc3173ce9fa7cf4c415ed4ff68c3ca63&language=en-US&query=star%20wars&page=1&include_adult=false

const Moviecard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <div className="col-4 my-5">
            <div className="card" >
                <img className="card-img-top" src={posterUrl} alt={movie.original_title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <p className="card-text">{movie.overview}</p>
                    <Link to={`/movies/${movie.id}`} className="btn btn-primary">Show Details</Link>
                </div>
            </div>
        </div>
    )
}

const Search = ({ keyword, searchResults }) => {
    const title = `You are searching for ${keyword}`

    const results = searchResults.map((obj, i) => {
        console.log({obj})
        return (
            <Moviecard movie={obj} key={i} />
        )
    })

    return (
        <div>
            <Hero text={title} />
            <div className="container">
                <div className="row">
                    {results}
                </div>
            </div>
        </div>
    )
}

export default Search;