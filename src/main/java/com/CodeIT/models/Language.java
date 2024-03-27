package com.CodeIT.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name="language")
public class Language implements Serializable{
    @Id
    private Integer id;

    private String language_type;

    public Language(){

    }
    public Language(Integer id, String language_type) {
        this.id = id;
        this.language_type = language_type;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLanguage_type() {
        return language_type;
    }

    public void setLanguage_type(String language_type) {
        this.language_type = language_type;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Language language = (Language) o;
        return Objects.equals(id, language.id) && Objects.equals(language_type, language.language_type);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, language_type);
    }

    @Override
    public String toString() {
        return "Language{" +
                "id=" + id +
                ", language_type='" + language_type + '\'' +
                '}';
    }
}
