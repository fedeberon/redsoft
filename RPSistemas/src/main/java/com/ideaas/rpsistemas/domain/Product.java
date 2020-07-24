package com.ideaas.rpsistemas.domain;


import java.math.BigDecimal;

public class Product {

    //name = "cod_articulo"
    private String code;

    //"descrip_arti"
    private String description;

    //name = "precio_uni"
    private String precioUni;

    //name = "precio_uni_vta"
    private BigDecimal precioUniVta;

    //name = "canti_stock"
    private BigDecimal cantiStock;


    public Product withCode(String code) {
        this.code = code;
        return this;
    }

    public Product withDescription(String description) {
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

    public String getPrecioUni() {
        return precioUni;
    }

    public void setPrecioUni(String precioUni) {
        this.precioUni = precioUni;
    }

    public BigDecimal getPrecioUniVta() {
        return precioUniVta;
    }

    public void setPrecioUniVta(BigDecimal precioUniVta) {
        this.precioUniVta = precioUniVta;
    }

    public BigDecimal getCantiStock() {
        return cantiStock;
    }

    public void setCantiStock(BigDecimal cantiStock) {
        this.cantiStock = cantiStock;
    }

    @Override
    public String toString() {
        return "Product{" +
                "code='" + code + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
