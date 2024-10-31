package com.rijal.rijalclaude.service;
import com.rijal.rijalclaude.domain.CardPaymentRequest;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Service
public class PaymentService {

    public PaymentService() {
        Stripe.apiKey = "your-stripe-secret-key";
    }

    public PaymentIntent createCardPayment(CardPaymentRequest request) throws StripeException {
        Map<String, Object> params = new HashMap<>();
        params.put("amount", (int) (request.getAmount() * 100)); // Convert to cents
        params.put("currency", "usd");
        params.put("payment_method_types", List.of("card"));

        return PaymentIntent.create(params);
    }
}

