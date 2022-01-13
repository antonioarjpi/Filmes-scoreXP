package simpledev.movie.service;


import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import simpledev.movie.dto.MovieDTO;
import simpledev.movie.model.Movie;
import simpledev.movie.repository.MovieRepository;


@Service
@AllArgsConstructor
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

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
}
