package com.ideaas.lared.web;

import com.ideaas.lared.domain.Order;
import com.ideaas.lared.service.interfaces.MercadoPagoService;
import com.mercadopago.exceptions.MPException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("cart")
public class CartController {

    private MercadoPagoService mercadoPagoService;

    @Autowired
    public CartController(MercadoPagoService mercadoPagoService) {
        this.mercadoPagoService = mercadoPagoService;
    }

    @RequestMapping("payment")
    private String preparePay(@ModelAttribute Order order){
        try {
            return mercadoPagoService.createPreference(order);
        } catch (MPException e) {
            e.printStackTrace();
            return "error/pago";
        }
    }
}
