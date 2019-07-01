package com.shoppingcart.springtest;

import com.shoppingcart.springtest.dao.ItemDaoImpl;
import com.shoppingcart.springtest.models.Item;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringtestApplicationTests {


    @Autowired
    ItemDaoImpl itemDao;

    @Test
    public void contextLoads() {
    }

    @Test
    public void checkItemDb(){
        List<Item> itemList = itemDao.get();
        Assert.assertTrue(!itemList.isEmpty());
    }
}
