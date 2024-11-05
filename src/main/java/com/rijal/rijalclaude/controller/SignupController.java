package com.rijal.rijalclaude.controller;

import com.rijal.rijalclaude.domain.UserAccount;
import com.rijal.rijalclaude.service.LoginService;
import com.rijal.rijalclaude.service.SignupService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/api")
public class SignupController {
    @Autowired
    private LoginService loginService;

    @Autowired
    private SignupService signupService; // Service to handle user operations

    // POST Request for Login
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> requestData) {
        // Extract username and password from the request
        String username = requestData.get("username");
        String password = requestData.get("password");

        // Attempt to authenticate the user
        UserAccount user = loginService.login(username, password);

        // Check if the user is authenticated
        if (user != null) {
            // Create a response object containing user details and a success message
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Login Success !!");
            response.put("email", user.getEmail());
            response.put("name", user.getName());

            return ResponseEntity.ok(response); // Return user data along with the message
        } else {
            return ResponseEntity.badRequest().body(Collections.singletonMap("error", "Login failed !"));
        }
    }


    // POST Request for Signup
    @PostMapping("/signup/cred")
    public ResponseEntity<?> signup(@RequestBody UserAccount requestData, @AuthenticationPrincipal OAuth2AuthenticationToken authentication) {
        if (authentication != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(Collections.singletonMap("error", "User already authenticated"));
        }
        String response = signupService.signup(requestData);
        return ResponseEntity.ok(Collections.singletonMap("message", response));
    }

    @PostMapping("/signup/google")
    public ResponseEntity<?> signupWithGoogle(@AuthenticationPrincipal OAuth2AuthenticationToken authentication) {
        return handleSocialLogin(authentication);
    }
    @GetMapping("/login/oauth2/code/google")
    public ResponseEntity<?> oauth2Callback(@AuthenticationPrincipal OAuth2AuthenticationToken authentication) {
        return handleSocialLogin(authentication);
    }

    @PostMapping("/signup/facebook")
    public ResponseEntity<?> signupWithFacebook(@AuthenticationPrincipal OAuth2AuthenticationToken authentication) {
        return handleSocialLogin(authentication);
    }

    @PostMapping("/signup/amazon")
    public ResponseEntity<?> signupWithAmazon(@AuthenticationPrincipal OAuth2AuthenticationToken authentication) {
        return handleSocialLogin(authentication);
    }
    @GetMapping("/user/info")
    public ResponseEntity<?> getUserInfo(HttpSession session) {
        Map<String, String> userInfo = (Map<String, String>) session.getAttribute("user");
        return ResponseEntity.ok(userInfo);
    }
    private ResponseEntity<?> handleSocialLogin(OAuth2AuthenticationToken authentication) {
        if (authentication == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Collections.singletonMap("error","User is not authenticated"));
        }
        String email = authentication.getPrincipal().getAttribute("email");
        String name = authentication.getPrincipal().getAttribute("name");

        if (!signupService.userExists(email)) {
            signupService.createUser(email, name);
        }
        // Create a response object (you can customize this as needed)
        Map<String, String> response = new HashMap<>();
        response.put("message", "User logged in successfully");
        response.put("email", email);
        response.put("name", name);

        return ResponseEntity.ok(response); // Return a JSON response
    }
}

