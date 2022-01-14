import "./styles.css"

function Pagination(){
    return(
        <div className="movie-pagination-container">
            <div className="movie-pagination-box">
                <button className="movie-pagination-button" disabled={true} >
                <i className="fa fa-arrow-left"></i>
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="movie-pagination-button" disabled={false} >
                <i className="fa fa-arrow-right"></i>    
                </button>
            </div>
        </div>
    )
}

export default Pagination;