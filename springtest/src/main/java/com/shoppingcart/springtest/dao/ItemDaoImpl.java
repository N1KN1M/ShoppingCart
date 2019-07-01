package com.shoppingcart.springtest.dao;

import com.shoppingcart.springtest.models.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemDaoImpl {
    @Autowired
    ItemDao itemDao;

    public boolean write(Item item){
        itemDao.save(item);
        return true;
    }

    public List<Item> get(){
        return itemDao.findAll();
    }
}
