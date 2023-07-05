package com.example.be.controller;

import com.example.be.model.TypeProduct;
import com.example.be.service.ITypeProductService;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/type-product")
public class TypeProductController {
    private final ITypeProductService iTypeProductService;

    public TypeProductController(ITypeProductService iTypeProductService) {
        this.iTypeProductService = iTypeProductService;
    }
    @GetMapping("")
    public ResponseEntity<?> listType (){
        if (iTypeProductService.listType().isEmpty()){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        List<TypeProduct> typeProductList = iTypeProductService.listType();
        return new ResponseEntity<>(typeProductList,HttpStatus.OK);
    }
}
