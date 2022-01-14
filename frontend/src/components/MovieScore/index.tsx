import MovieStars from "../MovieStars";
import "./styles.css"

function MovieScore(){

    const score = 3.5;
    const count = 3;

    return(
        <div className="movie-score-container">
            <p className="movie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="movie-score-count">{count} avaliações</p>
        </div>
    )
}

export default MovieScore;