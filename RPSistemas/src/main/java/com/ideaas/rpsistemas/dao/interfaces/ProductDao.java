package com.ideaas.rpsistemas.dao.interfaces;


import com.ideaas.rpsistemas.domain.Product;

import java.util.List;

public interface ProductDao {
    List<Product> findAll();
}
