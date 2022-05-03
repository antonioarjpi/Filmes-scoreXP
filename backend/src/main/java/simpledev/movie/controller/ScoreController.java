package simpledev.movie.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import simpledev.movie.dto.MovieDTO;
import simpledev.movie.dto.ScoreDTO;
import simpledev.movie.service.ScoreService;

@RestController
@RequestMapping("/scores")
public class ScoreController {

    @Autowired
    private ScoreService scoreService;

    @PutMapping
    public MovieDTO saveScore(@RequestBody ScoreDTO scoreId){
        MovieDTO movieDTO = scoreService.saveScore(scoreId);
        return movieDTO;
    }

}
