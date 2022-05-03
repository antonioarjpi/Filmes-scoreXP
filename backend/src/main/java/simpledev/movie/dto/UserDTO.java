package simpledev.movie.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import simpledev.movie.model.User;

@Data @AllArgsConstructor @NoArgsConstructor @Builder
public class UserDTO {

    private Long id;
    private String email;

    public UserDTO(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
    }
}
