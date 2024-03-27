package com.CodeIT.repository;

import com.CodeIT.models.Difficulty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface DifficultyRepository extends JpaRepository<Difficulty, Integer> {
}
