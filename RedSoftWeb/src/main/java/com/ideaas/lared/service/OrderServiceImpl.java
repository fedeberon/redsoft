package com.ideaas.lared.service;

import com.ideaas.lared.dao.OrderDao;
import com.ideaas.lared.domain.Order;
import com.ideaas.lared.service.interfaces.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Date;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderDao dao;

    public OrderServiceImpl(OrderDao dao) {
        this.dao = dao;
    }

    @Override
    public Order getByOrderId(Long id) {
        return dao.findById(id).get();
    }

    @Override
    public Order getByPreferenceId(String preferenceId) {
        return dao.findByPreferenceId(preferenceId);
    }

    @Override
    public List<Order> getByUserEmail(String userEmail){    
        return dao.findByUserEmail(userEmail);
    }

    @Override
    public Order save(Order order) {
        return dao.save(order);
    }

    @Override
    public Order updateOrder(String preferenceId) {

        Order order = dao.findByPreferenceId(preferenceId);

        if(order.getPreferenceId() != null){
        
            order.setPaystate(true);
            order.setLastUpdate(new Date());

           return dao.save(order);
        } else {
           return null;
        }
    }

}
