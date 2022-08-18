import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/request";
import { MoviePage } from "../../types/movie";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import axios from "axios";
import Paralax from "components/Paralax";
import CardDetailsSkeleton from "components/CardDetails/index-skeleton";
import Pagination from "../pagination"
import CardDetails from "../../components/CardDetails"
import './styles.css'

function Details() {

    const [loading, setLoading] = useState(false);
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
        axios.get(`${BASE_URL}/movies?size=1&page=${pageNumber}&sort=score,desc&sort=count,desc&sort=title,asc`)
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);
                setTimeout(() => {
                    setLoading(false)
                }, 500)
            })
    }, [pageNumber]);

    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>
            <Paralax />
            <div className="movie-pagination-container">
                <Link to={`/`}>
                    <Button className="p-button-rounded p-button-outlined" label="Mudar visão" />
                </Link>
            </div>
            <body>
                <Pagination page={page} onChange={handlePageChange} />
                {page.content.map(movie => (
                    <>
                        <div key={movie.id}>
                            {loading ? <CardDetailsSkeleton /> : <CardDetails movie={movie} />}
                        </div>
                    </>
                ))}
            </body>
        </>

    )
}

export default Details;