package com.portfolio.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    @Autowired
    private JavaMailSender mailSender;

    @PostMapping
    public String contactForm(@RequestBody ContactForm form) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("your.email@example.com"); // Change to your email
        message.setSubject("Portfolio Contact: " + form.getName());
        message.setText("Name: " + form.getName() + "\nEmail: " + form.getEmail() + "\nMessage: " + form.getMessage());
        mailSender.send(message);
        return "Message sent!";
    }

    public static class ContactForm {
        private String name, email, message;
        public String getName() { return name; }
        public void setName(String name) {this.name = name;}
        public String getEmail() {return email;}
        public void setEmail(String email) {this.email = email;}
        public String getMessage() {return message;}
        public void setMessage(String message) {this.message = message;}
    }
}
