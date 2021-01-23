package com.ideaas.lared.restController;

import java.util.List;

import com.ideaas.lared.domain.Order;
import com.ideaas.lared.service.interfaces.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class OrderRestController {

    @Autowired
    private OrderService orderService;

    @GetMapping(value="/orders/{preferenceId}", produces = "application/json")
    public Order getByPreferenceId(@PathVariable(value="preferenceId") String preferenceId) {
        
        return orderService.getByPreferenceId(preferenceId);

    }

    @GetMapping(value="/orders", produces = "application/json")
    public List<Order> getByUserEmail(@RequestParam String userEmail) {
    
        return orderService.getByUserEmail(userEmail);
    } 
}
