package com.rpsistemas.util;

import com.rpsistemas.domain.Product;
import com.rpsistemas.services.interfaces.ProductService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

public class Main {

    public static void main(String[] args){
        ApplicationContext context = new ClassPathXmlApplicationContext("classpath:/META-INF/spring-servlet.xml");
        ProductService productService = context.getBean(ProductService.class);
    
        List<Product> list = productService.findAll();
        
        list.forEach(product -> System.out.println(product));
        
    }

}
