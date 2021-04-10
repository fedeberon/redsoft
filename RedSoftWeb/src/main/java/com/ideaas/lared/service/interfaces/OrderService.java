package com.ideaas.lared.service.interfaces;

import com.ideaas.lared.domain.Order;
import java.util.List;

public interface OrderService {

    Order getByOrderId(Long id);

    Order getByPreferenceId(String preferenceId);

    List<Order> getByUserEmail(String userEmail);

    Order save(Order order);

    Order updateOrder(String preferenceId);

    void delete(Order order);
    
}
