package com.example.be.model;

import javax.persistence.*;

@Entity
@Table(name = "type_product")
public class TypeProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "type_id")
    private Integer typeId;
    @Column(name = "type_name")
    private String typeName;

    public TypeProduct() {
    }

    public TypeProduct(Integer typeId, String typeName) {
        this.typeId = typeId;
        this.typeName = typeName;
    }

    public Integer getTypeId() {
        return typeId;
    }

    public void setTypeId(Integer typeId) {
        this.typeId = typeId;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }
}
