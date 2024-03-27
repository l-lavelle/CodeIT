package com.CodeIT.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name="questions")
public class Questions implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;
    private String question;
    private String answer;
    private String hints;
    private String solution;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "difficulty_id")
    private Difficulty difficulty;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "language_id")
    private Language language;

    public Questions(){

    }

    public Questions(Integer id, String name, String question, String answer, String hints, String solution, Difficulty difficulty, Language language) {
        this.id = id;
        this.name = name;
        this.question = question;
        this.answer = answer;
        this.hints = hints;
        this.solution = solution;
        this.difficulty = difficulty;
        this.language = language;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getHints() {
        return hints;
    }

    public void setHints(String hints) {
        this.hints = hints;
    }

    public String getSolution() {
        return solution;
    }

    public void setSolution(String solution) {
        this.solution = solution;
    }

    public Difficulty getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(Difficulty difficulty) {
        this.difficulty = difficulty;
    }

    public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Questions questions = (Questions) o;
        return Objects.equals(id, questions.id) && Objects.equals(name, questions.name) && Objects.equals(question, questions.question) && Objects.equals(answer, questions.answer) && Objects.equals(hints, questions.hints) && Objects.equals(solution, questions.solution) && Objects.equals(difficulty, questions.difficulty) && Objects.equals(language, questions.language);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, question, answer, hints, solution, difficulty, language);
    }

    @Override
    public String toString() {
        return "Questions{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", question='" + question + '\'' +
                ", answer='" + answer + '\'' +
                ", hints='" + hints + '\'' +
                ", solution='" + solution + '\'' +
                ", difficulty=" + difficulty +
                ", language=" + language +
                '}';
    }
}
