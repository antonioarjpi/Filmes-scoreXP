import Pagination from "../pagination"
import CardDetails from "../../components/CardDetails"
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import { MoviePage } from "../../types/movie";
import { Link } from "react-router-dom";
import Paralax from "components/Paralax";

function Details(){
    
    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    })
    
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=1&page=${pageNumber}&sort=score,desc&sort=count,desc&sort=title,asc`)
        .then(response => {
            const data = response.data as MoviePage;
            setPage(data);
        })
    }, [pageNumber]);

    const handlePageChange = (newPageNumber : number ) => {
        setPageNumber(newPageNumber);
    }  
    
    return(   
        <>           
        <Paralax />
        <div className="movie-pagination-container">
            <Link to={`/`}>
                <button className="btn movie-btn mt-3">Mudar visão</button>
            </Link>
        </div>
        <body>
            <Pagination page={page} onChange={handlePageChange}/>
                {page.content.map(movie => (
                    <>
                        <div key={movie.id} className="">
                            <CardDetails  movie={movie}  />
                        </div>
                    </>

                ))}  
 
        </body>           
        </>

    )
}

export default Details;