package com.ideaas.lared.restController;

import com.ideaas.lared.domain.Order;
import com.ideaas.lared.service.interfaces.OrderService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class OrderRestController {

    private OrderService orderService;

    @Autowired
    public OrderRestController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping(value="/orders/{preferenceId}", produces = "application/json")
    public Order getByPreferenceId(@PathVariable(value="preferenceId") String preferenceId) {
        return orderService.getByPreferenceId(preferenceId);
    }

    @GetMapping(value="/orders", produces = "application/json")
    public List<Order> getByUserEmail(@RequestParam String userEmail) {
        return orderService.getByUserEmail(userEmail);
    }

    @PostMapping(value = "/orders/remove", consumes = "application/json")
    private void deleteOrder(@RequestBody Order order){
        try {                  
            orderService.delete(order);
        } catch (Exception e) {
            e.printStackTrace();            
        }
    }

}
