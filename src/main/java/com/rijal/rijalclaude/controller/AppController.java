package com.rijal.rijalclaude.controller;

import com.rijal.rijalclaude.domain.BankPaymentRequest;
import com.rijal.rijalclaude.domain.CardPaymentRequest;
import com.rijal.rijalclaude.domain.UserAccount;
import com.rijal.rijalclaude.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class AppController {


    @Autowired
    private SignupService signupService;

    @Autowired
    private NasService nasService;

    @Autowired
    private PayPalService payPalService;

    @Autowired
    private PaymentService paymentService;
     final String rootPath = System.getProperty("user.dir")+"/claude-storage/";


//    @GetMapping("/auth/google")
//    public String redirectToGoogleLogin() {
//        return "redirect:/oauth2/authorization/google";
//    }

    // POST Request for NAS File Upload
    @PostMapping("/upload/{username}/{folder}")
    public ResponseEntity<?> uploadFile(@PathVariable String username,
                                        @PathVariable String folder,
                                        @RequestParam("file") MultipartFile file) {
        try {
            Path userFolder = Paths.get(rootPath + username + "/" + folder);
            nasService.uploadFile(userFolder,file);
            return ResponseEntity.ok(Collections.singletonMap("success","File uploaded successfully."));
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Collections.singletonMap("error","Failed to upload file."));
        }
    }
    @GetMapping("/folders/{username}")
    public ResponseEntity<List<String>> getFolders(@PathVariable String username) {
        Path userRoot = Paths.get(rootPath + username);
        if (!Files.exists(userRoot)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Collections.emptyList());
        }
        try{
            return ResponseEntity.ok(nasService.getFiles(username));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Collections.emptyList());
        }
    }
    // GET Request Example
    @GetMapping("/public-info")
    public ResponseEntity<?> getPublicInfo() {
        String data = "Some public information!";
        return ResponseEntity.ok(data);
    }

    @PostMapping("/payment/payWithCard")
    public ResponseEntity<String> payWithCard(@RequestBody CardPaymentRequest paymentRequest) {
        // Here you would integrate with a payment processor (like Stripe or PayPal)
        // For now, let's just return a success message
        System.out.println("Processing card payment: " + paymentRequest);
        return ResponseEntity.ok("Card payment successful!");
    }

    @PostMapping("/payment/payWithBank")
    public ResponseEntity<String> payWithBank(@RequestBody BankPaymentRequest paymentRequest) {
        // Integrate with ACH or another bank payment provider
        System.out.println("Processing bank payment: " + paymentRequest);
        return ResponseEntity.ok("Bank payment successful!");
    }
    @PostMapping("/payment/payWithPayPal")
    public ResponseEntity<String> payWithPayPal(@RequestParam double amount) {
        try {
            String approvalUrl = payPalService.createPayment(amount);
            return ResponseEntity.ok(approvalUrl);  // Return approval URL to the frontend
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("PayPal payment failed: " + e.getMessage());
        }
    }

    @GetMapping("/payment/executePayPalPayment")
    public ResponseEntity<String> executePayPalPayment(@RequestParam String paymentId, @RequestParam String payerId) {
        try {
            payPalService.executePayment(paymentId, payerId);
            return ResponseEntity.ok("Payment executed successfully!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Payment execution failed: " + e.getMessage());
        }
    }
}
