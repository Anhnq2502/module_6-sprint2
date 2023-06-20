package com.example.be.model;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Integer productId;
    @Column(name = "product_name", columnDefinition = "varchar(45)")
    private String productName;
    @Column(name = "product_price", columnDefinition = "decimal")
    private BigDecimal productPrice;
    @Column(name = "product_quantity")
    private Integer productQuantity;
    @Column(name = "weight")
    private Double weight;
    @Column(name = "product_description", columnDefinition = "mediumtext")
    private String productDescription;
    @Column(name = "product_img", columnDefinition = "varchar(255)")
    private String productImg;

    @ManyToOne
    @JoinColumn(name = "type_id")
    private TypeProduct typeProduct;

    @ManyToOne
    @JoinColumn(name = "manufacturer_id")
    private Manufacturer manufacturer;

    public Product() {
    }

    public Product(Integer productId, String productName, BigDecimal productPrice, Integer productQuantity, Double weight, String productDescription, String productImg, TypeProduct typeProduct, Manufacturer manufacturer) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productQuantity = productQuantity;
        this.weight = weight;
        this.productDescription = productDescription;
        this.productImg = productImg;
        this.typeProduct = typeProduct;
        this.manufacturer = manufacturer;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public BigDecimal getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(BigDecimal productPrice) {
        this.productPrice = productPrice;
    }

    public Integer getProductQuantity() {
        return productQuantity;
    }

    public void setProductQuantity(Integer productQuantity) {
        this.productQuantity = productQuantity;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public String getProductImg() {
        return productImg;
    }

    public void setProductImg(String productImg) {
        this.productImg = productImg;
    }

    public TypeProduct getTypeProduct() {
        return typeProduct;
    }

    public void setTypeProduct(TypeProduct typeProduct) {
        this.typeProduct = typeProduct;
    }

    public Manufacturer getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(Manufacturer manufacturer) {
        this.manufacturer = manufacturer;
    }
}
