package simpledev.movie.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import simpledev.movie.dto.MovieDTO;
import simpledev.movie.service.MovieService;

@RestController
@RequestMapping("/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping
    public Page<MovieDTO> findAll(Pageable pageable){
        return movieService.findAll(pageable);
    }

    @GetMapping("/{movieId}")
    public MovieDTO findById(@PathVariable Long movieId){
        return movieService.findById(movieId);
    }
}
