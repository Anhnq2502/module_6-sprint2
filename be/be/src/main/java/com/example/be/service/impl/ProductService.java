package com.example.be.service.impl;

import com.example.be.model.Product;
import com.example.be.repository.IProductRepository;
import com.example.be.service.IProductService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements IProductService {
    private final IProductRepository iProductRepository;

    public ProductService(IProductRepository iProductRepository) {
        this.iProductRepository = iProductRepository;
    }

    @Override
    public Page<Product> findAllProduct(String search, Pageable pageable) {
        return iProductRepository.findAllProduct(search, pageable);
    }

    @Override
    public Page<Product> findAllProductSorted(Pageable pageable) {
        return null;
    }

    @Override
    public Page<Product> findProductByTypeProduct(int id, Pageable pageable) {
        return iProductRepository.findProductByTypeProduct(id,pageable);
    }

    @Override
    public Optional<Product> findById(Integer productId) {
        return iProductRepository.findById(productId);
    }

    @Override
    public void save(Product product) {
        iProductRepository.save(product);
    }

    @Override
    public List<Product> findAllListProduct() {
        return iProductRepository.findAll();
    }

    @Override
    public void deleteProduct(Integer id) {
        iProductRepository.delete(iProductRepository.findById(id).get());
    }
}
