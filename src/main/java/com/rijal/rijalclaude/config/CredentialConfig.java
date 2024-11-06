package com.rijal.rijalclaude.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.IOException;

@Configuration
public class CredentialConfig {

    @Value("${secret.path}")
    private String secretPath;

    public String getLinkedinClientId() throws IOException {
        return readSecretFromFile("linkedin-client-id");
    }

    public String getLinkedinClientSecret() throws IOException {
        return readSecretFromFile("linkedin-client-secret");
    }
    public String getGoogleClientId() throws IOException {
        return readSecretFromFile("google-client-id");
    }

    public String getGoogleClientSecret() throws IOException {
        return readSecretFromFile("google-client-secret");
    }
    public String getFacebookClientId() throws IOException {
        return readSecretFromFile("facebook-client-id");
    }

    public String getFacebookClientSecret() throws IOException {
        return readSecretFromFile("facebook-client-secret");
    }
    public String getAmazonClientId() throws IOException {
        return readSecretFromFile("amazon-client-id");
    }

    public String getAmazonClientSecret() throws IOException {
        return readSecretFromFile("amazon-client-secret");
    }

    private String readSecretFromFile(String fileName) throws IOException {
        Path filePath = Paths.get(secretPath, fileName);
        return new String(Files.readAllBytes(filePath)).trim(); // Reading content from the file
    }
}
