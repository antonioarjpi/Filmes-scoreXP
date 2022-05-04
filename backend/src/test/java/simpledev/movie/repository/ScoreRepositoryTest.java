package simpledev.movie.repository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.BDDMockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import simpledev.movie.model.Movie;
import simpledev.movie.model.Score;
import simpledev.movie.model.User;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@DisplayName("ScoreRepository")
class ScoreRepositoryTest {

    @Autowired
    private ScoreRepository scoreRepository;

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private UserRepository userRepository;


    @Test
    @DisplayName("save Score Persist WhenSuccessful")
    void save_PersistMovie_WhenSuccessful(){
        Score score = new Score();

        Movie movie = new Movie(null, "The Batman", 5.0, 1, "Null", "null", null);

        movieRepository.save(movie);

        User user = new User(1l, "antonio@gmail.com");

        userRepository.save(user);

        score.setMovie(movie);

        score.setUser(user);

        Score saveScore = scoreRepository.saveAndFlush(score);

        assertThat(saveScore).isNotNull();

        assertThat(saveScore.getId()).isNotNull();

        assertThat(saveScore.getValue()).isEqualTo(score.getValue());

    }

}