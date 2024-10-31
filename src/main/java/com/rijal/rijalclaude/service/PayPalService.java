package com.rijal.rijalclaude.service;

import com.paypal.api.payments.Payment;
import com.paypal.base.rest.APIContext;
import com.paypal.base.rest.PayPalRESTException;
import com.paypal.api.payments.PaymentExecution;
import com.paypal.api.payments.RedirectUrls;
import com.paypal.api.payments.Transaction;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PayPalService {

    @Value("${paypal.client.id}")
    private String clientId;

    @Value("${paypal.client.secret}")
    private String clientSecret;

    @Value("${paypal.mode}")
    private String mode;

    public String createPayment(double amount) throws PayPalRESTException {
        APIContext apiContext = new APIContext(clientId, clientSecret, mode);

        Transaction transaction = new Transaction();
        transaction.setDescription("Payment description");
        transaction.setAmount(new com.paypal.api.payments.Amount("USD", String.format("%.2f", amount)));

        List<Transaction> transactions = new ArrayList<>();
        transactions.add(transaction);

        Payment payment = new Payment();
        payment.setIntent("sale");
        payment.setTransactions(transactions);

        RedirectUrls redirectUrls = new RedirectUrls();
        redirectUrls.setCancelUrl("http://localhost:4200/cancel");
        redirectUrls.setReturnUrl("http://localhost:4200/success");
        payment.setRedirectUrls(redirectUrls);

        Payment createdPayment = payment.create(apiContext);

        // Get approval URL
        return createdPayment.getLinks().stream()
                .filter(link -> link.getRel().equals("approval_url"))
                .findFirst()
                .map(link -> link.getHref())
                .orElse(null);
    }

    public Payment executePayment(String paymentId, String payerId) throws PayPalRESTException {
        APIContext apiContext = new APIContext(clientId, clientSecret, mode);
        Payment payment = new Payment();
        payment.setId(paymentId);

        PaymentExecution paymentExecute = new PaymentExecution();
        paymentExecute.setPayerId(payerId);
        return payment.execute(apiContext, paymentExecute);
    }
}

