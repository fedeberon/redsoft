package com.ideaas.lared.domain;

import org.springframework.stereotype.Component;

@Component
public class Product {

    private String code;

    private String description;

    public Product withCode(String code){
        this.code = code;
        return this;
    }
    
    public Product withDescription(String description){
        this.description = description;
        return this;
    }
    
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
