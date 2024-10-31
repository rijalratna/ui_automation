package com.rijal.rijalclaude.repository;

import com.rijal.rijalclaude.domain.HomeAutomation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HomeAutomationRepository extends MongoRepository<HomeAutomation, String> {
    List<HomeAutomation> findByName(String name); // Example query method
}
