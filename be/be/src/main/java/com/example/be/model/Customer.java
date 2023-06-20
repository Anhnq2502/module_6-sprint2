package com.example.be.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
    private Integer customerId;
    @Column(name = "customer_name", columnDefinition = "varchar(45)")
    private String customerName;
    @Column(name = "date_of_birth", columnDefinition = "varchar(45)")
    private LocalDate dateOfBirth;
    @Column(name = "customer_email", columnDefinition = "varchar(255)")
    private String customerEmail;
    @Column(name = "customer_phone", columnDefinition = "varchar(45)")
    private String customerPhone;
    @Column(name = "customer_address", columnDefinition = "varchar(255)")
    private String customerAddress;

    public Customer() {
    }

    public Customer(Integer customerId, String customerName, LocalDate dateOfBirth, String customerEmail, String customerPhone, String customerAddress) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.dateOfBirth = dateOfBirth;
        this.customerEmail = customerEmail;
        this.customerPhone = customerPhone;
        this.customerAddress = customerAddress;
    }

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    public String getCustomerPhone() {
        return customerPhone;
    }

    public void setCustomerPhone(String customerPhone) {
        this.customerPhone = customerPhone;
    }

    public String getCustomerAddress() {
        return customerAddress;
    }

    public void setCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
    }
}
