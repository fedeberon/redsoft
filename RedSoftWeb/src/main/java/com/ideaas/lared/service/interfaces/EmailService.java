package com.ideaas.lared.service.interfaces;

import com.ideaas.lared.domain.Email;
import javax.mail.MessagingException;

public interface EmailService {

    void send(Email email) throws MessagingException;
}

