package com.shoppingcart.springtest.dao;

import com.shoppingcart.springtest.models.Userdata;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDataDao extends JpaRepository<Userdata,Integer> {
}
