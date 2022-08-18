import { Skeleton } from 'primereact/skeleton';
import "./styles.css"

function MovieCardSkeleton() {

    window.onload = function () {
        window.scrollTo(0, 150)
    }

    return (
        <div>
            <div>
                <Skeleton height="152.141px" borderRadius="8px 8px 0px 0px" />
            </div>
            <div className="movie-card-bottom-container">
                <h3><Skeleton width="140px" /></h3>
                <div className="movie-score-container">
                    <Skeleton width="140px" height="56px" />
                </div>
                <a className="btn btn-primary dsmovie-btn disabled mt-1" href="#header">Avaliar</a>
            </div>
        </div>
    )
}

export default MovieCardSkeleton;
