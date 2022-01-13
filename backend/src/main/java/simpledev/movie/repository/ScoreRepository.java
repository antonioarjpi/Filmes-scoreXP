package simpledev.movie.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import simpledev.movie.model.Score;
import simpledev.movie.model.ScorePK;

@Repository
public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
}
