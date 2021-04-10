package com.ideaas.lared.domain;

import javax.persistence.*;

@Entity
@Table(name = "PRODUCTS")
public class Product {

    @Id
    @Column(name = "PRO_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "PRO_CODE")
    private String code;

    @Column(name = "PRO_NAME")
    private String name;

    @Column(name = "PRO_PRICE")
    private Double price;

    @Column(name = "PRO_URL_IMAGE")
    private String image;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Product withCode(String code){
        this.code = code;
        return this;
    }

    public Product withDescription(String name){
        this.name = name;
        return this;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

}
