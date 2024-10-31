package com.rijal.rijalclaude.repository;
import com.rijal.rijalclaude.domain.UserAccount;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Lazy
@Repository
public interface LoginRepository extends MongoRepository<UserAccount, String> {
    UserAccount findByUsername(String username);
    boolean existsByUsername(String username);

    boolean findByEmail(String email);
}
