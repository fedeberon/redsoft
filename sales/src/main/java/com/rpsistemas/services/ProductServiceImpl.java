package com.rpsistemas.services;

import com.rpsistemas.dao.interfaces.ProductDao;
import com.rpsistemas.domain.Product;
import com.rpsistemas.services.interfaces.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductDao dao;

    @Override
    public List<Product> findAll(){
        return dao.findAll();
    }
    
}
