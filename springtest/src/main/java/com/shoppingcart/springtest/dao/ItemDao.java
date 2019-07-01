package com.shoppingcart.springtest.dao;

import com.shoppingcart.springtest.models.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemDao extends JpaRepository<Item, Integer> {
}
