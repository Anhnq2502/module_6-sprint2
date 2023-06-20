package com.example.be.service;

import com.example.be.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface IProductService {
    Page<Product> findAllProduct(String search, Pageable pageable);
    Page<Product> findAllProductSorted(Pageable pageable);
    Page<Product> findProductByTypeProduct(int id, Pageable pageable);
    Optional<Product> findById(Integer productId);
    void save(Product product);

    List<Product> findAllListProduct();

    void deleteProduct(Integer id);
}
