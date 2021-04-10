package com.ideaas.lared.web;

import javax.mail.MessagingException;

import com.ideaas.lared.domain.Email;
import com.ideaas.lared.domain.EmailRequest;
import com.ideaas.lared.service.interfaces.EmailService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
public class EmailController {

    private EmailService emailService;

    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @RequestMapping(value = {"/sendEmail"}, method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity<String> sendEmail(
        @RequestBody EmailRequest details) {
        String subject = "000".equals(details.getPhone()) ? "Nueva venta!" : "Consulta de usuario";
        String to = "gestiones@laredwifi.com.ar";
        Email mailConstructor = new Email();
        mailConstructor.setFrom(details.getEmail());
        mailConstructor.setTo(new String[]{to});
        mailConstructor.setSubject(subject);

        if("000".equals(details.getPhone())){
            mailConstructor.setText(
                "<strong>Nombre: </strong>" + details.getName() + "<br/>" +
                "<strong>Email: </strong>" + details.getEmail() + "<br/>" +
                "<strong>Mensaje: </strong> <br/>" + details.getMessage());
        } else {
            mailConstructor.setText(
                "<strong>Nombre: </strong>" + details.getName() + "<br/>" +
                "<strong>Telefono: </strong>" + details.getPhone() + "<br/>" +
                "<strong>Mensaje: </strong>" + details.getMessage());
        }
        
        String message = "";
        try {
            emailService.send(mailConstructor);
            message = "Message Sent!";
        } catch (MessagingException e) {
            e.printStackTrace();
            message = e.getMessage();
            return new ResponseEntity<>(message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(message, HttpStatus.OK);
    }
}
