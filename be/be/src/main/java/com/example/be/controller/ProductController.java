package com.example.be.controller;

import com.example.be.dto.ProductDTO;
import com.example.be.model.Product;
import com.example.be.service.IProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ProductController {
    private final IProductService iProductService;

    public ProductController(IProductService iProductService) {
        this.iProductService = iProductService;
    }

    @GetMapping("/public/product/list")
    public ResponseEntity<?> findAllProduct(@PageableDefault(size = 8) Pageable pageable, @RequestParam(defaultValue = "0") int page,
                                            @RequestParam(defaultValue = "") String search,
                                            @RequestParam(value = "sort", defaultValue = "product_quantity") String sort, @RequestParam(value = "type_product", defaultValue = "0") int typeProduct) {
        pageable = PageRequest.of(page, 8, Sort.by(sort).ascending());
        Page<Product> products;
        if (typeProduct == 0) {
            products = iProductService.findAllProduct(search, pageable);
        } else {
            products = iProductService.findProductByTypeProduct(typeProduct, pageable);
        }
        if (products.isEmpty()) {
            return new ResponseEntity<>(products, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<?> list() {
        List<Product> productList = iProductService.findAllListProduct();
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    @PostMapping("/admin/product/create")
    public ResponseEntity<?> createProduct(@Valid @RequestBody ProductDTO productDTO, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Product product = new Product();
        BeanUtils.copyProperties(productDTO, product);
        product.getTypeProduct().setTypeId(productDTO.getTypeProduct().getTypeId());
        product.getManufacturer().setManufacturerId(productDTO.getManufacturer().getManufacturerId());
        iProductService.save(product);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }

    @PutMapping("/admin/product/{productId}")
    public ResponseEntity<?> updateProduct(@Valid @RequestBody ProductDTO productDTO, @PathVariable Integer productId, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        Product product = new Product();
        Optional<Product> product1 = iProductService.findById(productId);
        BeanUtils.copyProperties(product1, productDTO);
        productDTO.setProductId(productId);
        BeanUtils.copyProperties(productDTO, product);
        product.getTypeProduct().setTypeId(productDTO.getTypeProduct().getTypeId());
        product.getManufacturer().setManufacturerId(productDTO.getManufacturer().getManufacturerId());
        iProductService.save(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }
    @DeleteMapping("/admin/product/{productId}")
    public ResponseEntity<?> deleteProduct (@PathVariable Integer productId){
        iProductService.deleteProduct(productId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/public/product/{productId}")
    public ResponseEntity<?> detailProduct (@PathVariable Integer productId){
        Product product = iProductService.findById(productId).get();
        return new ResponseEntity<>(product,HttpStatus.OK);
    }
}
