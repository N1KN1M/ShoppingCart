package com.shoppingcart.springtest.dao;



import com.shoppingcart.springtest.models.Userdata;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserDataDaoImpl {

    @Autowired
    UserDataDao userDao;

    public boolean write(Userdata userData){
        userDao.save(userData);
        return true;
    }

    public boolean checkExistingUserName(String userName){
        return userDao.findAll().stream().anyMatch(userdata -> userdata.getUsername().equals(userName));
    }

    public boolean validateUser(Userdata userdata){
        return userDao.findAll().stream().anyMatch(res -> res.getUsername().equals(userdata.getUsername()) && res.getPassword().equals(userdata.getPassword()));
    }

}
