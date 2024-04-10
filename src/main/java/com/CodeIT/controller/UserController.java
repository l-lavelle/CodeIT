package com.CodeIT.controller;

import com.CodeIT.models.Questions;
import com.CodeIT.models.User;
import com.CodeIT.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.regex.*;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/api/users")
    public List<User> getAllUsers() {
        List<User> userList = userRepository.findAll();
        return userList;
    }

    @PostMapping("/api/users")
    public User addUser(@RequestBody User user) throws Exception{
        boolean b2=Pattern.compile("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$").matcher(user.getPassword()).matches();
//        System.out.println(b2);

        // Encrypt password if matches regex validation
        if (b2){
            user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
            userRepository.save(user);
            return user;
        } else {
            throw new Exception("Password needs to contain lowercase letter, uppercase letter, and number");
        }
    }
}
