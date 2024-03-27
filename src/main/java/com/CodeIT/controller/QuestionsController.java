//https://medium.com/@arijit83work/spring-boot-one-to-one-mapping-with-hibernate-and-jpa-226ab865bf46 Tried not working

package com.CodeIT.controller;

import com.CodeIT.models.Difficulty;
import com.CodeIT.models.Questions;
import com.CodeIT.repository.DifficultyRepository;
import com.CodeIT.repository.QuestionsRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class QuestionsController {
    @Autowired
    QuestionsRepository questionsrepository;

    @Autowired
    DifficultyRepository difficultyRepository;

//    needs to pull difficulty_id
    @GetMapping("/api/questions")
    public List<Questions> getAllQuestions() {

        List<Questions> questionsList = questionsrepository.findAll();
        return questionsList;
    }
//    @GetMapping("/api/posts/{id}")
//    public Post getPost(@PathVariable Integer id) {
//        Post returnPost = repository.getReferenceById(id);
//        returnPost.setVoteCount(voteRepository.countVotesByPostId(returnPost.getId()));
//        return returnPost;
//    }

//    Needs to set difficulty_id
    @PostMapping("/api/questions")
    @ResponseStatus(HttpStatus.CREATED)
    public Questions addQuestions(@RequestBody Questions questions) {
//        Difficulty difficulty = difficultyRepository.getReferenceById(1);

        Questions questiontemp = new Questions();
        questiontemp.setName(questions.getName());

//        Difficulty difficultytemp = questions.getDifficulty().;
//        questiontemp.setDifficulty(difficulty);

//        questions.setDifficulty();
//        Difficulty difficultyTemp = difficultyRepository.getReferenceById(id);
//        questions.setDifficulty(difficultyTemp);
        try{
            questionsrepository.save(questions);
        }
        catch(Exception e){
            System.out.println(e.getMessage());
        }
        return questions;
    }
//    @PutMapping("/api/posts/{id}")
//    public Post updatePost(@PathVariable int id, @RequestBody Post post) {
//        Post tempPost = repository.getReferenceById(id);
//        tempPost.setTitle(post.getTitle());
//        tempPost.setPostText(post.getPostText());
//        repository.save(tempPost);
//        return tempPost;
//    }
//    @PutMapping("/api/posts/upvote")
//    public String addVote(@RequestBody Vote vote, HttpServletRequest request) {
//        String returnValue = "";
//        if(request.getSession(false) != null) {
//            Post returnPost = null;
//            User sessionUser = (User) request.getSession().getAttribute("SESSION_USER");
//            vote.setUserId(sessionUser.getId());
//            voteRepository.save(vote);
//            returnPost = repository.getReferenceById(vote.getPostId());
//            returnPost.setVoteCount(voteRepository.countVotesByPostId(vote.getPostId()));
//            returnValue = "";
//        } else {
//            returnValue = "login";
//        }
//        return returnValue;
//    }
//    @DeleteMapping("/api/posts/{id}")
//    @ResponseStatus(HttpStatus.NO_CONTENT)
//    public void deletePost(@PathVariable int id) {
//        repository.deleteById(id);
//    }
}