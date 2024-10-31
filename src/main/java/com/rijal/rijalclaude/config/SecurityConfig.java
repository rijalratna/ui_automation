//package com.rijal.rijalclaude.config;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//import org.springframework.web.cors.CorsConfigurationSource;
//
//import java.util.Arrays;
//import java.util.List;
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http.csrf(csrf -> csrf.disable())
//                .authorizeHttpRequests(authorize -> authorize
//                        .requestMatchers("/#/home/**", "/#/signup/**", "/api/signup", "/api/signup/**", "/oauth2/**").permitAll() // Allow access to static resources
//                        .anyRequest().authenticated() // Require authentication for other requests
//                )
////                .oauth2Login(oauth2 -> oauth2
////                        .loginPage("/#/home") // Set your login page correctly
////                        .defaultSuccessUrl("/#/home", true) // Redirect to home page after successful login
//////                        .failureUrl("/signup/?error=true")
////                        .permitAll()
////                )
//                .logout(logout -> logout
//                        .logoutUrl("/logout")
//                        .logoutSuccessUrl("/home") // Redirect to home after logout
//                        .permitAll()
//                );
//        return http.build();
//    }
//
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//}
