package com.example.backendeco.Controller;

import com.example.backendeco.Entity.Product;
import com.example.backendeco.Service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;


    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public ResponseEntity<Product> addProduct(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("price") Double price,
            @RequestParam(value = "image", required = false) MultipartFile image) throws IOException {

        Product savedProduct = productService.addProduct(name, description, price, image);
        return ResponseEntity.ok(savedProduct);
    }
}
