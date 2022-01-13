package simpledev.movie.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import simpledev.movie.model.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
}
