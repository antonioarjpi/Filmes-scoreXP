package simpledev.movie.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import simpledev.movie.model.Movie;

@Data @AllArgsConstructor @NoArgsConstructor @Builder
public class MovieDTO {

    private Long id;
    private String title;
    private Double score;
    private Integer count;
    private String image;
    private String sinopse;

    public MovieDTO(Movie movie) {
        this.id = movie.getId();
        this.title = movie.getTitle();
        this.score = movie.getScore();
        this.count = movie.getCount();
        this.image = movie.getImage();
        this.sinopse = movie.getSinopse();
    }
}
