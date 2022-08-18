package com.devsimple.filmesxp.controller;

import com.devsimple.filmesxp.dto.MovieDTO;
import com.devsimple.filmesxp.model.Movie;
import com.devsimple.filmesxp.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping
    public Page<MovieDTO> findAll(Pageable pageable) {
        return movieService.findAll(pageable);
    }

    @GetMapping("/{movieId}")
    public MovieDTO findById(@PathVariable Long movieId) {
        return movieService.findById(movieId);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Movie saveFilm(@Valid @RequestBody Movie movie) {
        return movieService.addMovie(movie);
    }

    @PutMapping("/{movieId}")
    public Movie attMovie(@Valid @RequestBody Movie movie,
                          @PathVariable Long movieId) {
        movie.setId(movieId);
        movie = movieService.attMovie(movie);
        return movieService.attMovie(movie);
    }
}
