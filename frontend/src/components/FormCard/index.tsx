import axios, { AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from 'utils/request';
import { Movie } from '../../types/movie';
import { validateEmail } from 'utils/validate'
import { ToastContainer, toast } from 'react-toastify';
import './styles.css';

type Props = {
    movieId: string;
}

function FormCard({ movieId }: Props) {

    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState<Movie>();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                setMovie(response.data);
            });
    }, [movieId]);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const email = (event.target as any).email.value;
        const score = (event.target as any).score.value;

        if (!validateEmail(email)) {
            toast.error('Digite um e-mail válido!');
            throw new Error("");
        }

        setLoading(true);

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                movieId: movieId,
                score: score
            }
        }
        axios(config).then(() => {
            toast.success('Filme avaliado com sucesso');
            setTimeout(() => {
                setLoading(false)
                navigate(-1)
            }, 2000)
        }).catch((error) => {
            setLoading(false)
            throw new Error(error.toString());
        });
    }

    return (
        <div className="movie-form-container" id='topo' >
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                draggable
                theme='dark'
            />

            <img className="movie-form-card-image" src={movie?.image} alt={movie?.title} />
            <div className="movie-form-bottom-container" id='card'>
                <h3>{movie?.title}</h3>
                <form className="movie-form" onSubmit={handleSubmit}>
                    <div className="form-group movie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group movie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="movie-form-btn-container">
                        <button className="btn btn-primary movie-btn" type="submit" disabled={loading}>
                            Salvar {loading ?
                                <span style={{ marginLeft: '2px' }} className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : ''}
                        </button>
                        {/* <button type="submit" className="btn btn-primary movie-btn">Salvar</button> */}
                    </div>
                </form >
                <Link to="/">
                    <button className="btn btn-primary movie-btn mt-3" onClick={() => navigate(-1)}>Cancelar</button>
                </Link>
            </div >
        </div >
    )
}

export default FormCard;