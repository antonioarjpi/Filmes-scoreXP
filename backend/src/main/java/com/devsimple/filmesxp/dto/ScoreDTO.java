package com.devsimple.filmesxp.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ScoreDTO {

    private Long movieId;
    private String email;
    private Double score;
    private String comments;

}
