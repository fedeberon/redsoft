package com.rpsistemas.dao.interfaces;

import com.rpsistemas.domain.Product;

import java.util.List;

public interface ProductDao {
    Product save(Product product);

    List<Product> findAll();
}
