package io.spring.image.demo.application.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class SecurityConfig {
    public PasswordEncoder psswordEncoder(){
        return new BCryptPasswordEncoder();
    }
}

