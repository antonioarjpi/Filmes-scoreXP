package com.devsimple.filmesxp.repository;

import com.devsimple.filmesxp.model.Score;
import com.devsimple.filmesxp.model.ScorePK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
}
