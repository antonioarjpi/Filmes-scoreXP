package simpledev.movie.repository;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import simpledev.movie.model.Movie;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@DisplayName("MovieRepository")
class MovieRepositoryTest {

    @Autowired
    private MovieRepository movieRepository;

    @Test
    @DisplayName("save Persist Movie WhenSuccessful")
    void save_PersistMovie_WhenSuccessful(){
        Movie movieSaved = createMovieToSaved();

        Movie saveMovie = movieRepository.save(movieSaved);

        assertThat(saveMovie).isNotNull();

        assertThat(saveMovie.getId()).isNotNull();

        assertThat(saveMovie.getTitle()).isEqualTo(movieSaved.getTitle());

        assertThat(saveMovie.getImage()).isEqualTo(movieSaved.getImage());

        assertThat(saveMovie.getCount()).isEqualTo(movieSaved.getCount());

        assertThat(saveMovie.getScores()).isEqualTo(movieSaved.getScores());

        assertThat(saveMovie.getScore()).isEqualTo(movieSaved.getScore());

        assertThat(saveMovie.getSinopse()).isEqualTo(movieSaved.getSinopse());

    }

    @Test
    @DisplayName("update Update Movie WhenSuccessful")
    void update_UpdateMovie_WhenSuccessful(){
        Movie movieSaved = createMovieToSaved();

        Movie saveMovie = movieRepository.save(movieSaved);

        movieSaved.setTitle("Homem aranha");
        movieSaved.setScore(4.7);
        movieSaved.setCount(1);
        movieSaved.setImage("https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wd7b4Nv9QBHDTIjc2m7sr0IUMoh.jpg");
        movieSaved.setSinopse("Longe de casa");

        Movie update = movieRepository.save(movieSaved);

        assertThat(update).isNotNull();

        assertThat(update.getId()).isNotNull();

        assertThat(update.getTitle()).isEqualTo(saveMovie.getTitle());

        assertThat(update.getScore()).isEqualTo(saveMovie.getScore());

        assertThat(update.getSinopse()).isEqualTo(saveMovie.getSinopse());

        assertThat(update.getCount()).isEqualTo(saveMovie.getCount());

        assertThat(update.getImage()).isEqualTo(saveMovie.getImage());

        assertThat(update.getScores()).isEqualTo(saveMovie.getScores());

    }

    private Movie createMovieToSaved(){
        return Movie.builder()
                .title("Batman")
                .count(1)
                .score(5.0)
                .sinopse("Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City.")
                .image("https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wd7b4Nv9QBHDTIjc2m7sr0IUMoh.jpg")
                .build();
    }

}