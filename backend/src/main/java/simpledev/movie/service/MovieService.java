package simpledev.movie.service;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import simpledev.movie.dto.MovieDTO;
import simpledev.movie.exception.NotFoundException;
import simpledev.movie.model.Movie;
import simpledev.movie.repository.MovieRepository;

@Service
@AllArgsConstructor
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;


    @Transactional
    public Movie search(Long movieId){
        return movieRepository.findById(movieId)
                .orElseThrow(() -> new NotFoundException("Filme não enfcontrado! "));
    }

    @Transactional(readOnly = true)
    public MovieDTO findById(Long movieId){
        Movie movie = movieRepository.findById(movieId).get();
        MovieDTO movieDTO = new MovieDTO(movie);
        return movieDTO;
    }

    @Transactional(readOnly = true)
    public Page<MovieDTO> findAll(Pageable pageable){
        Page<Movie> result = movieRepository.findAll(pageable);
        Page<MovieDTO> page = result.map(x -> new MovieDTO(x));
        return page;
    }

    @Transactional
    public Movie addMovie(Movie movie){
        return movieRepository.save(movie);
    }

    @Transactional
    public Movie attMovie(Movie movie){
        Movie newMovie = search(movie.getId());
        putMovie(newMovie, movie);
        return movieRepository.save(movie);
    }

    private void putMovie(Movie newMovie, Movie movie){
        newMovie.setTitle(movie.getTitle());
        newMovie.setImage(movie.getImage());
    }
}
