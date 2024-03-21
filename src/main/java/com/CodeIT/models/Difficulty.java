package com.CodeIT.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name="difficulty")
public class Difficulty implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String difficultyType;


    public Difficulty(Integer id, String difficultyType) {
        this.id = id;
        this.difficultyType = difficultyType;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDifficultyType() {
        return difficultyType;
    }

    public void setDifficultyType(String difficultyType) {
        this.difficultyType = difficultyType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Difficulty that = (Difficulty) o;
        return Objects.equals(id, that.id) && Objects.equals(difficultyType, that.difficultyType);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, difficultyType);
    }

    @Override
    public String toString() {
        return "Difficulty{" +
                "id=" + id +
                ", difficultyType='" + difficultyType + '\'' +
                '}';
    }
}
