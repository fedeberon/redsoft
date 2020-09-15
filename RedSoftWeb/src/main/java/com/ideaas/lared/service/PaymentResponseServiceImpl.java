package com.ideaas.lared.service;

import com.ideaas.lared.dao.PaymentResponseDao;
import com.ideaas.lared.domain.PaymentResponse;
import com.ideaas.lared.service.interfaces.PaymentResponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentResponseServiceImpl implements PaymentResponseService {

    @Autowired
    private PaymentResponseDao dao;

    @Override
    public PaymentResponse save(PaymentResponse paymentResponse) {
        return dao.save(paymentResponse);
    }
}
