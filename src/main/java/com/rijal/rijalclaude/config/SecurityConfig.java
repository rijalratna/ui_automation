package com.rijal.rijalclaude.config;

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

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(authorize -> authorize
                        // Allow access to login, signup, and oauth2 endpoints
                        .requestMatchers("/api/login", "/api/signup", "/api/signup/**", "/oauth2/**").permitAll() // Include other public paths
                        .anyRequest().authenticated() // Require authentication for all other requests
                )
                .formLogin(form -> form
//                        .loginPage("/#/login") // Your custom Angular route for login
                        .defaultSuccessUrl("/#/home", true) // Redirect to home after successful login
                        .failureUrl("/#/signup?error=true") // Redirect to login with error
                )
                .oauth2Login(oauth2 -> oauth2
//                        .loginPage("/login") // Ensure this matches your Angular routing
                        .defaultSuccessUrl("/home", true) // Redirect to home after successful login
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
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
