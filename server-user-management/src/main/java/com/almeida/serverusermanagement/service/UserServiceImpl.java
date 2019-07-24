package com.almeida.serverusermanagement.service;

import com.almeida.serverusermanagement.model.User;
import com.almeida.serverusermanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User save(User user) {
        user.setPassword(this.passwordEncoder.encode(user.getPassword()));
        this.userRepository.save(user);
        return user;
    }

    public User findByUsername(String username) {
        return this.userRepository.findByUsername(username).orElse(null);
    }

    public List<String> findUsers(List<Long> idList) {
        return this.userRepository.findUserIdList(idList);
    }

    public List<User> findAllUsers() {
        return this.userRepository.findAll();
    }
}
