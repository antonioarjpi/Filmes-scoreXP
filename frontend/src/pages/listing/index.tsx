import Pagination from "../pagination"
import MovieCard from "../../components/MovieCard"
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "utils/request";
import { MoviePage } from "types/movie";
import About from "components/About";
import Paralax from "components/Paralax";


function Listing(){
    
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
        axios.get(`${BASE_URL}/movies?size=8&page=${pageNumber}&sort=score,desc&sort=count,desc&sort=title,asc`)
        .then(response => {
            const data = response.data as MoviePage;
            setPage(data);
            console.log(data)
        })
    }, [pageNumber]);

    const handlePageChange = (newPageNumber : number ) => {
        setPageNumber(newPageNumber);
    }

    
    return(
        <>      
        <body>
        <Paralax />
            <Pagination page={page} onChange={handlePageChange}/>

            <div className="container">
                <div className="row">
                    {page.content.map(movie => (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
                <About />
            </div>
            </body>
            

            
            
        </>

    )
}

export default Listing;