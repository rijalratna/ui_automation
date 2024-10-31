package com.rijal.rijalclaude.service;

import com.rijal.rijalclaude.domain.UserAccount;
import com.rijal.rijalclaude.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class SignupService {
    @Autowired
    LoginRepository loginRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String signup(UserAccount requestData) {
        if (loginRepository.existsByUsername(requestData.getUsername())) {
            throw new RuntimeException("Username already exists");
        }
        requestData.setPassword(passwordEncoder.encode(requestData.getPassword()));
         loginRepository.save(requestData);
        return "signup successful.";
    }
    public boolean userExists(String email) {
        return loginRepository.findByEmail(email); // Check if user exists
    }

    public void createUser(String email, String name) {
        UserAccount user = new UserAccount();
        user.setEmail(email);
        user.setName(name);
        // Set other user fields as necessary
        loginRepository.save(user); // Save the new user in the database
    }
}
