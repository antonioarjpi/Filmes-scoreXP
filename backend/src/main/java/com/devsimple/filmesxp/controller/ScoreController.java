package com.devsimple.filmesxp.controller;

import com.devsimple.filmesxp.dto.MovieDTO;
import com.devsimple.filmesxp.dto.ScoreDTO;
import com.devsimple.filmesxp.service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
