import { Link } from "react-router-dom";
import { MoviePage } from "types/movie";
import "./styles.css"

type Props = {
    page: MoviePage;
    onChange: Function;
}

function Pagination( {page, onChange}: Props){
    return(
        <>
        <div className="movie-pagination-container">
            <div className="movie-pagination-box">
                <button className="movie-pagination-button" onClick={() => onChange(page.number - 1)} disabled={page.first} >
                <i className="fa fa-arrow-left"></i>
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="movie-pagination-button" onClick={() => onChange(page.number + 1)} disabled={page.last} >
                <i className="fa fa-arrow-right"></i>    
                </button>
            </div>
        </div>
        </>
    )
}

export default Pagination;