package com.CodeIT.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.io.Serializable;

public class User_Answer {
    private Boolean solved;

    private String user_work;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="question_id", referencedColumnName = "id")
    private Questions questions;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
}
