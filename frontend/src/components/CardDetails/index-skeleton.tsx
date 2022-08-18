import { Skeleton } from 'primereact/skeleton';
import "./styles.css"

function CardDetailsSkeleton() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <Skeleton  width="532px" height="300px" />
                    <div className="button-card col-md-6 mt-3">
                        <button className="btn btn-dark movie-btn disabled">Avaliar</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="details">
                        <span>
                            <Skeleton className="mb-1" width="110px" height="77.9992px" />
                        </span>
                        <h1><Skeleton width="500px" height="61.98px" /></h1>
                        <h4>Sinopse</h4>
                        <p><Skeleton width="636px" height="110px" /></p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CardDetailsSkeleton;
