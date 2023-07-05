package com.example.be.repository;

import com.example.be.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select * from product p \n" +
            "JOIN type_product tp on p.type_id = tp.type_id\n" +
            "where product_name like concat('%', :search, '%')",
            nativeQuery = true)
    Page<Product> findAllProduct(@Param("search") String search, @Param("pageable") Pageable pageable);
    Page<Product> findProductByTypeProduct(@Param("id") Integer id, Pageable pageable);
}
