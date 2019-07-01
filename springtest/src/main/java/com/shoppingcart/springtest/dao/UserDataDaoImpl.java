package com.shoppingcart.springtest.dao;



import com.shoppingcart.springtest.models.Userdata;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserDataDaoImpl {

    @Autowired
    UserDataDao userDao;

    public boolean write(Userdata userData){
        userDao.save(userData);
        return true;
    }

    public boolean get(String userName){
        return userDao.findAll().stream().anyMatch(userdata1 -> userdata1.getUsername().equals(userName));
    }

}
