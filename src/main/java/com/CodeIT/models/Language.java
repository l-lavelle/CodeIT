package com.CodeIT.models;

import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Objects;

public class Language implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String languageType;

    public Language(){

    }

    public Language(Integer id, String languageType) {
        this.id = id;
        this.languageType = languageType;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLanguageType() {
        return languageType;
    }

    public void setLanguageType(String languageType) {
        this.languageType = languageType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Language language = (Language) o;
        return Objects.equals(id, language.id) && Objects.equals(languageType, language.languageType);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, languageType);
    }

    @Override
    public String toString() {
        return "Language{" +
                "id=" + id +
                ", languageType='" + languageType + '\'' +
                '}';
    }
}
