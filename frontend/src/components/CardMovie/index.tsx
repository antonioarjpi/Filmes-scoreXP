import axios, { AxiosRequestConfig } from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/request';
import './styles.css';

function CardMovie(){

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const title = (event.target as any).title.value;
        const image = (event.target as any).image.value;
        const sinopse = (event.target as any).sinopse.value;

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'POST',
            url: '/movies',
            data: {
                title: title,
                score: 0.0,
                count: 0,
                image: image,
                sinopse: sinopse
            }
        }

        axios(config).then(response => {
            navigate("/")
        });
        
    }

    return(
        <div className="movie-form-container">

            <div className="movie-card-bottom-container-btn">
                <form className="movie-form" onSubmit={handleSubmit}>
                    <div className="form-group movie-form-group">
                        <label htmlFor="title">Nome do filme</label>
                        <input type="text" className="form-control" id="title" />
                    </div>

                    <div className="form-group movie-form-group">
                        <label htmlFor="sinopse">Sinopse</label>
                        <input type="text" className="form-control" id="sinopse" />
                    </div>

                    <div className="form-group movie-form-group">
                        <label htmlFor="image">Link da image</label>
                        <input className="form-control" id="image" />
                        <a href='https://www.themoviedb.org/' target={"_blank"}>Não sabe onde encontrar? </a>
                    </div>

                    <div className="movie-form-btn-container">
                        <button type="submit" className="btn btn-primary movie-btn" onClick={() => navigate(-1)}>Salvar</button>
                    </div>
                </form >

                <Link to="/">
                    <button className="btn btn-primary movie-btn mt-3" onClick={() => navigate(-1)}>Cancelar</button>
                </Link>
                
            </div >
        </div >
    )
}

export default CardMovie;