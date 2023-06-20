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
    @Query(value = "select * from product \n" +
            "join type_product on product.type_id = type_product.type_id\n" +
            "where product_name like concat('%', :search, '%')", nativeQuery = true)
    Page<Product> findAllProduct(@Param("search") String search, @Param("pageable") Pageable pageable);
    Page<Product> findProductByTypeProduct(@Param("id") Integer id, Pageable pageable);
}
