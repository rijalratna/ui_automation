package com.rijal.rijalclaude.service;

import com.rijal.rijalclaude.domain.UserAccount;
import com.rijal.rijalclaude.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    @Autowired
    private LoginRepository loginRepository;

    public String login(String username, String password) {
        UserAccount user = loginRepository.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return "Login successful!";
        }
        return "Invalid credentials!";
    }
}
