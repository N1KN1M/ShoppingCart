package com.shoppingcart.springtest.controllers;

import com.shoppingcart.springtest.dao.ItemDaoImpl;
import com.shoppingcart.springtest.models.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class ItemController {
    @Autowired
    ItemDaoImpl itemDao;

    @RequestMapping("/post")
    public List<Item> get(){
        return itemDao.get();
    }

}
