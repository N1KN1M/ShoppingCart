package com.shoppingcart.springtest.controllers;


import com.shoppingcart.springtest.dao.UserDataDaoImpl;
import com.shoppingcart.springtest.models.Userdata;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class UserDataController {

    @Autowired
    UserDataDaoImpl userDao;

    @PostMapping("/post")
    public boolean write(@RequestBody Userdata userData, Model model){
        userDao.write(userData);
        return true;
    }

    @PostMapping("/availability")
    public boolean getUsers(@RequestBody String userName, Model model){
        return userDao.get(userName);
    }
}
