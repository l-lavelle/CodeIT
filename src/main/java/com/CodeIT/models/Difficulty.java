package com.CodeIT.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.Objects;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name="difficulty")
public class Difficulty implements Serializable{
    @Id
    private Integer id;

    private String difficulty_type;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "difficulty", cascade = CascadeType.ALL)
    private List<Questions> questionsList;

    public Difficulty(){

    }

    public Difficulty(Integer id, String difficulty_type) {
        this.id = id;
        this.difficulty_type = difficulty_type;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDifficulty_type() {
        return difficulty_type;
    }

    public void setDifficulty_type(String difficulty_type) {
        this.difficulty_type = difficulty_type;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Difficulty that = (Difficulty) o;
        return Objects.equals(id, that.id) && Objects.equals(difficulty_type, that.difficulty_type);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, difficulty_type);
    }

    @Override
    public String toString() {
        return "Difficulty{" +
                "id=" + id +
                ", difficulty_type='" + difficulty_type + '\'' +
                '}';
    }
}
