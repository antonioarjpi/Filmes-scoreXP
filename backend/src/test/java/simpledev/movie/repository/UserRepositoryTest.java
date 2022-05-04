package simpledev.movie.repository;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import simpledev.movie.model.User;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@DisplayName("UserRepository")
class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    @DisplayName("saveAndFlush Persist User When Successful")
    void saveAndFlush_PersistUser_WhenSuccessful(){
        User userToSaved = createUserToSaved();

        User save = userRepository.saveAndFlush(userToSaved);

        assertThat(save).isNotNull();

        assertThat(save.getId()).isNotNull();

        assertThat(save.getEmail()).isEqualTo(userToSaved.getEmail());

    }

    @Test
    @DisplayName("Find By Name Return User When Successful")
    void findByName_ReturnUser_WhenSuccessful(){
        User userToSaved = createUserToSaved();

        User save = userRepository.saveAndFlush(userToSaved);

        String user = save.getEmail();

        userRepository.findByEmail(user);

        assertThat(user).isNotNull();

        assertThat(user).isEqualTo(userToSaved.getEmail());
    }


    private User createUserToSaved(){
        return User.builder()
                .email("antonio@gmail.com")
                .build();
    }

}