package com.ideaas.rpsistemas.domain;

import java.math.BigDecimal;

public class Product {

    // name = "cod_articulo"
    private String code;

    // "descrip_arti"
    private String description;

    // name = "precio_uni"
    private String precioUni;

    // name = "precio_uni_vta"
    private BigDecimal precioUniVta;

    // name = "canti_stock"
    private BigDecimal cantiStock;

    // name = "web_link"
    private String webLink;

    // name = "desc_adicional"
    private String descAdicional;

    // name = "porcen_descuent"
    private BigDecimal porcenDescuento;

    public Product withDescAdicional(String descAdicional) {
        this.descAdicional = descAdicional;
        return this;
    }

    public Product withCode(String code) {
        this.code = code;
        return this;
    }

    public Product withWebLink(String webLink) {
        this.webLink = webLink;
        return this;
    }

    public Product withPorcenDescuento(BigDecimal porcenDescuento) {
        this.porcenDescuento = porcenDescuento;
        return this;
    }

    public Product withDescription(String description) {
        this.description = description;
        return this;
    }
    public Product withPriceUni(String priceUni) {
        this.precioUni = priceUni;
        return this;
    }
    public Product withPriceUniVta(BigDecimal priceUniVta){
        this.precioUniVta = priceUniVta;
        return this;
    }

    public Product withCantiStock(BigDecimal cantiStock){
        this.cantiStock = cantiStock;
        return this;
    }

    public BigDecimal getPorcenDescuento() {
        return porcenDescuento;
    }

    public void setPorcenDescuento(BigDecimal porcenDescuento) {
        this.porcenDescuento = porcenDescuento;
    }

    public String getDescAdicional() {
        return descAdicional;
    }

    public void setDescAdicional(String descAdicional) {
        this.descAdicional = descAdicional;
    }

    public String getWebLink() {
        return webLink;
    }

    public void setWebLink(String webLink) {
        this.webLink = webLink;
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
