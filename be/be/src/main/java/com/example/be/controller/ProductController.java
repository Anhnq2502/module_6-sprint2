package com.example.be.controller;

import com.example.be.model.Product;
import com.example.be.service.IProductService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/product")
@CrossOrigin("*")
public class ProductController {
    private final IProductService iProductService;

    public ProductController(IProductService iProductService) {
        this.iProductService = iProductService;
    }

    @GetMapping("/list")
    public ResponseEntity<?> findAllFilm(@PageableDefault(size = 8) Pageable pageable, @RequestParam(defaultValue = "0") int page,
                                         @RequestParam(value = "sort", defaultValue = "productId") String sort, @RequestParam(value = "type_product", defaultValue = "0") int typeProduct) {
        pageable = PageRequest.of(page, 8, Sort.by(sort).ascending());
        Page<Product> products;
        if (typeProduct == 0) {
            products = iProductService.findAllProductSorted(pageable);
        } else {
            products = iProductService.findProductByTypeProduct(typeProduct, pageable);
        }
        if (products.isEmpty()) {
            return new ResponseEntity<>(products, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}
