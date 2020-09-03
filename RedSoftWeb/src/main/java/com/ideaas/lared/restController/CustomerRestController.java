package com.ideaas.lared.restController;

import com.ideaas.lared.domain.Customer;
import com.ideaas.lared.restTemplate.interfaces.MyFunction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/cutomer")
public class CustomerRestController {

    private MyFunction<List<Customer>> function;

    @Autowired
    public CustomerRestController(MyFunction<List<Customer>> function) {
        this.function = function;
    }

    @RequestMapping("list")
     public List<Customer> findAll(){
        List<Customer> customers = function.apply();

        return customers;
    }
}
