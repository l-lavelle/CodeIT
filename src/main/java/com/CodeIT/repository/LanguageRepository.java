package com.CodeIT.repository;

import com.CodeIT.models.Language;
import com.CodeIT.models.Questions;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LanguageRepository extends JpaRepository<Language, Integer> {
}
