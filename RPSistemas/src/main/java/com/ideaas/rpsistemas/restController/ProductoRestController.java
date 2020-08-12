package com.ideaas.rpsistemas.restController;

import com.ideaas.rpsistemas.domain.Product;
import com.ideaas.rpsistemas.services.interfaces.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("product")
public class ProductoRestController {

    private ProductService productService;

    @Autowired
    public ProductoRestController(ProductService productService) {
        this.productService = productService;
    }


    @GetMapping("list")
    private List<Product> findAll(){
        return productService.findAll();
    }
}
