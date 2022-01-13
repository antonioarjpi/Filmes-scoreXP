package simpledev.movie.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import simpledev.movie.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
