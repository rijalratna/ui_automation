package com.rijal.rijalclaude.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    CredentialConfig credentialConfig;
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(authorize -> authorize
                        // Allow access to login, signup, and oauth2 endpoints
                        .requestMatchers("/api/login", "/api/signup", "/api/signup/**", "/oauth2/**","/#/login","/#/signup","/#/home").permitAll() // Include other public paths
                        .anyRequest().authenticated() // Require authentication for all other requests
                )
                .formLogin(form -> form
//                        .loginPage("/#/login") // Your custom Angular route for login
                        .defaultSuccessUrl("/#/home", true) // Redirect to home after successful login
                        .failureUrl("/#/signup?error=true") // Redirect to login with error
                )
                .oauth2Login(oauth2 -> oauth2
//                        .loginPage("/#/login") // Ensure this matches your Angular routing
                        .defaultSuccessUrl("/#/home", true) // Redirect to home after successful login
                        .failureUrl("/signup?error=true") // Redirect on failure
                        .authorizationEndpoint(authorization -> authorization
                                .baseUri("/oauth2/authorization") // Set base URI for OAuth2 authorization
                        )
                        .permitAll()
                )
                .logout(logout -> logout
                        .logoutUrl("/logout")
                        .logoutSuccessUrl("/login") // Redirect to Angular login page after logout
                        .permitAll()
                );
        String linkedinClientId = credentialConfig.getLinkedinClientId();
        String linkedinClientSecret = credentialConfig.getLinkedinClientSecret();
        String facebookClientId = credentialConfig.getFacebookClientId();
        String facebookClientSecret = credentialConfig.getFacebookClientSecret();
        String googleClientId = credentialConfig.getGoogleClientId();
        String googleClientSecret = credentialConfig.getGoogleClientSecret();
        String amazonClientId = credentialConfig.getAmazonClientId();
        String amazonClientSecret = credentialConfig.getAmazonClientSecret();
        System.out.println("LinkedIn Client ID: " + linkedinClientId);
        System.out.println("LinkedIn Client Secret: " + linkedinClientSecret);
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
