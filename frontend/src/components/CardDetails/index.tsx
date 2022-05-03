import { Link } from "react-router-dom";
import { Movie } from "../../types/movie";
import MovieScoreDetails from "../MovieScoreDetails";
import "./styles.css"

type Props = {
    movie: Movie;
}

function CardDetails( { movie } : Props){

    return(        
        <>

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img className="movie-movie-card-image-details" src={movie.image} alt={movie.title} />
                    <div className="button-card col-md-6 mt-3"> 
                        <Link to={`/form/${movie.id}`}>
                                <button className="btn btn-dark movie-btn">Avaliar</button>
                            </Link> 
                        </div> 
                </div>
            
                <div className="col-md-6">
                    <div className="details">
                        <span><MovieScoreDetails score={movie.score} /></span>
                        <h1>{movie.title}</h1>
                        <h4>Sinopse</h4>
                        <p>{movie.sinopse}</p>
                    </div>
                </div>      

                </div>
                </div>        
        </>
    )

}

export default CardDetails;
