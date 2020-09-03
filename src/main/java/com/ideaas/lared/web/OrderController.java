package com.ideaas.lared.web;

import com.ideaas.lared.service.interfaces.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("order")
public class OrderController {

    private OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @RequestMapping("/{id}")
    public String get(@PathVariable Long id, Model model){
        model.addAttribute("order", orderService.get(id));

        return "order/show";
    }

    @RequestMapping("/byPreferenceId")
    public String byPreferenceId(@RequestParam String id, Model model){
        model.addAttribute("order", orderService.getByPreferenceId(id));

        return "order/show";
    }


}
