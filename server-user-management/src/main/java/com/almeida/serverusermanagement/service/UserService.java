package com.almeida.serverusermanagement.service;

import com.almeida.serverusermanagement.model.User;

import java.util.List;

public interface UserService {

    User save(User user);

    User findByUsername(String username);

    List<String> findUsers(List<Long> idList);

    List<User> findAllUsers();
}
