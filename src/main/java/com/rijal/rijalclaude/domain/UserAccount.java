package com.rijal.rijalclaude.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@Document(collection = "userAccount")
public class UserAccount {
    @Id
    private String id;
    private String username;
    private String password;
    private String email;
    private String roles;
    private String phoneNumber;
    private String name;
    private String fullName;
    private String address;
    private String recoveryEmail;

    private boolean isvalidatedEmail;
    private boolean isValidatedPhoneNumber;
    private int validateionLinKExpireHours;


    public boolean isIsvalidatedEmail() {
        return isvalidatedEmail;
    }

    public void setIsvalidatedEmail(boolean isvalidatedEmail) {
        this.isvalidatedEmail = isvalidatedEmail;
    }

    public boolean isValidatedPhoneNumber() {
        return isValidatedPhoneNumber;
    }

    public void setValidatedPhoneNumber(boolean validatedPhoneNumber) {
        isValidatedPhoneNumber = validatedPhoneNumber;
    }

    public int getValidateionLinKExpireHours() {
        return validateionLinKExpireHours;
    }

    public void setValidateionLinKExpireHours(int validateionLinKExpireHours) {
        this.validateionLinKExpireHours = validateionLinKExpireHours;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getRecoveryEmail() {
        return recoveryEmail;
    }

    public void setRecoveryEmail(String recoveryEmail) {
        this.recoveryEmail = recoveryEmail;
    }
}

