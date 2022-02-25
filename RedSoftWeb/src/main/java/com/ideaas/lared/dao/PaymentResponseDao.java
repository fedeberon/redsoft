package com.ideaas.lared.dao;

import com.ideaas.lared.domain.PaymentResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentResponseDao extends JpaRepository<PaymentResponse, Integer> {

    PaymentResponse findByPreferenceId(String preferenceId);
}
