package io.spring.image.demo.application.users;


import io.spring.image.demo.domain.AccessToken;
import io.spring.image.demo.domain.entity.User;
import io.spring.image.demo.domain.exeption.DuplocatedTupleExeption;
import io.spring.image.demo.domain.service.UserService;
import io.spring.image.demo.infra.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static org.postgresql.util.PasswordUtil.encodePassword;

@Service
@RequiredArgsConstructor
public class UserServiceImp implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @Override
    public User getByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    @Transactional
    public User save(User user) {
        var possibleUser = getByEmail(user.getEmail());

        if (possibleUser != null) {
            throw new DuplocatedTupleExeption("User already exists!");
        }

        encodePassword(user);
        return userRepository.save(user);
    }
    @Override

    public AcessToken autenticate(String email, String password){
        var user = getByEmail(email);
        if(user == null){
            return null;
        }
        boolean matches = passwordEncorder.matches(password, user.getPassword());
        if(matches){
            return jwtService.generateToken(user);
        }
        return null;
    }
    private void encodePassword(User user){
        String ramPassword = user.getPassword();
        String encodePassword = passwordEncoder.encode(ramPassword);
        user.setPassword(encodePassword);
    }
}

