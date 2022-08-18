import Pagination from "../pagination"
import MovieCard from "../../components/MovieCard"
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "utils/request";
import { MoviePage } from "types/movie";
import {Button} from 'primereact/button'
import About from "components/About";
import Paralax from "components/Paralax";
import { Link } from "react-router-dom";
import MovieCardSkeleton from "components/MovieCard/index-skeleton";

function Listing() {

    const [loading, setLoading] = useState(false)
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
        setLoading(true)
        axios.get(`${BASE_URL}/movies?size=8&page=${pageNumber}&sort=score,desc&sort=count,desc&sort=title,asc`)
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);
                setTimeout(() => {
                    setLoading(false)
                }, 800)
            })
    }, [pageNumber]);

    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <body>
            <Paralax />
            <div className="movie-pagination-container">
                <Link to={`/details/`}>
                    <Button className="p-button-rounded p-button-outlined" label="Mudar visão" />
                </Link>
            </div>
            <Pagination page={page} onChange={handlePageChange} />
            <div className="container">
                <div className="row">
                    {loading ? (
                        <>
                            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                <MovieCardSkeleton />
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                <MovieCardSkeleton />
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                <MovieCardSkeleton />
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                <MovieCardSkeleton />
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                <MovieCardSkeleton />
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                <MovieCardSkeleton />
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                <MovieCardSkeleton />
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                <MovieCardSkeleton />
                            </div>
                        </>
                    ) : (
                        <>
                            {page.content.map(movie => (
                                <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">

                                    <MovieCard movie={movie} />
                                </div>
                            ))}
                        </>
                    )}

                </div>
                <About />
            </div>
        </body>
    )
}

export default Listing;