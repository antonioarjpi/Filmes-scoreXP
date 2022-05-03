import MovieStars from "../MovieStars";
import "./styles.css"

type Props = {
    score: number; 
}

function MovieScoreDetails( { score } : Props ){

    return(
        <div className="movie-score-container">
            <p className="movie-score-value-details">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars score={score}/>
        </div>
    )
}

export default MovieScoreDetails;