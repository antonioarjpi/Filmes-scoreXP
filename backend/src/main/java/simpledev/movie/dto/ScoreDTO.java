package simpledev.movie.dto;

public class ScoreDTO {

    private Long movieId;
    private String email;
    private Double score;
    private String comments;

    public ScoreDTO() {
    }

    public ScoreDTO(Long movieId, String email, Double score, String comments) {
        this.movieId = movieId;
        this.email = email;
        this.score = score;
        this.comments = comments;
    }

    public Long getMovieId() {
        return movieId;
    }

    public void setMovieId(Long movieId) {
        this.movieId = movieId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }
}
