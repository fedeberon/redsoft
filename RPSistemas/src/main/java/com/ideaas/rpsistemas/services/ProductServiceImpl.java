package com.ideaas.rpsistemas.services;

import com.ideaas.rpsistemas.dao.interfaces.ProductDao;
import com.ideaas.rpsistemas.domain.Product;
import com.ideaas.rpsistemas.services.interfaces.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    private ProductDao dao;

    @Autowired
    public ProductServiceImpl(ProductDao dao) {
        this.dao = dao;
    }

    @Override
    public List<Product> findAll() {
        return dao.findAll();
    }

}
