package com.CodeIT.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.io.Serializable;
import jakarta.validation.constraints.Size;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name="user")
public class User implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Size(min = 5, max = 40, message="username needs to be between 5 and 40 characters")
    @Column(unique=true)
    private String username;

// Need upper, lower, and number
    @Size(min = 5, max = 40, message="password needs to be between 5 and 40 characters")
    private String password;

    @Transient
    boolean loggedIn;

}

/* TODO: Do need a role if using session?? */