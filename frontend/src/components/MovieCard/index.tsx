import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import MovieScore from "../MovieScore";
import "./styles.css"

type Props = {
    movie: Movie;
}

function MovieCard( { movie } : Props){

     window.onload = function(){
        window.scrollTo(0,150)
   }

    return(        
        <div>
            <img className="movie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="movie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore count={movie.count} score={movie.score} />

                <Link to={`/form/${movie.id}`}>
                    <a className="btn btn-primary dsmovie-btn" href="#header">Avaliar</a>
                </Link>
                
            </div>
        </div>   
    )

}

export default MovieCard;
