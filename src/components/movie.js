import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Hero from './hero';

const Movie = ()=>{
    const {id} = useParams();

    const [movieDetails,setMovieDetails] = useState({})
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bc3173ce9fa7cf4c415ed4ff68c3ca63&language=en-US`)
            .then(response => response.json())
            .then(data => {
                    setMovieDetails(data)
                    setIsLoading(false)
            })
    },[id])

    function renderMovieDetails(){
        if(isLoading){
            return <Hero text="Loading..."/> 
        }
        if(movieDetails){
            const posterUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
            return(
                <div>
                    <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-3">
                                <img src={posterUrl} alt={movieDetails.original_title} className="img-fluid shadow-lg rounded"></img>
                            </div>
                            <div className="col-9">
                                <h2>{movieDetails.original_title}</h2>
                                <p>{movieDetails.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
           
    }

    return renderMovieDetails();
}

export default Movie;