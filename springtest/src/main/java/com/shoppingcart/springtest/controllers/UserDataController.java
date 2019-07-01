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
    public int write(@RequestBody Userdata userData, Model model){
        System.out.println(userData.toString());
        userDao.write(userData);
        return userData.getId();
    }
}
