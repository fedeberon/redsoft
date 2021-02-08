package com.ideaas.lared.restController;

import com.ideaas.lared.domain.Detail;
import com.ideaas.lared.domain.Order;
import com.ideaas.lared.domain.PaymentResponse;
import com.ideaas.lared.service.interfaces.MercadoPagoService;
import com.ideaas.lared.service.interfaces.PaymentResponseService;
import com.mercadopago.exceptions.MPException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class CartRestController {

    private MercadoPagoService mercadoPagoService;
    private PaymentResponseService paymentResponseService;

    @Autowired
    public CartRestController(MercadoPagoService mercadoPagoService, PaymentResponseService paymentResponseService) {
        this.mercadoPagoService = mercadoPagoService;
        this.paymentResponseService = paymentResponseService;
    }

    @PostMapping(value = "/cart/preference", consumes = "application/json")
    private String preparePay(@RequestBody List<Detail> details, @RequestParam String user){
        try {
            Order order = new Order().withDetails(details);
            order.setUserEmail(user);
            return mercadoPagoService.createPreference(order);
        } catch (MPException e) {
            e.printStackTrace();
            return "error/pago";
        }
    }

    @GetMapping(value = "/cart/paymentresponse/{preferenceId}", produces = "application/json")
    public PaymentResponse getByPreferenceId(@PathVariable(value="preferenceId") String preferenceId) {
        return paymentResponseService.getByPreferenceId(preferenceId);
    }
}
