package com.example.be.service.impl;

import com.example.be.model.TypeProduct;
import com.example.be.repository.ITypeProductRepository;
import com.example.be.service.ITypeProductService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TypeProductService implements ITypeProductService {
    private final ITypeProductRepository iTypeProductRepository;

    public TypeProductService(ITypeProductRepository iTypeProductRepository) {
        this.iTypeProductRepository = iTypeProductRepository;
    }

    @Override
    public List<TypeProduct> listType() {
        return iTypeProductRepository.findAll();
    }
}
