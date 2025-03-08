package com.example.backendeco.Controller;

import com.example.backendeco.Entity.Category;
import com.example.backendeco.Entity.Product;
import com.example.backendeco.Service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // Endpoint pour ajouter un produit avec une catégorie
    @PostMapping
    public ResponseEntity<Product> addProduct(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("price") Double price,
            @RequestParam("categoryId") Long categoryId,
            @RequestParam(value = "image", required = false) MultipartFile image) throws IOException {

        Product savedProduct = productService.addProduct(name, description, price, image, categoryId);
        return ResponseEntity.ok(savedProduct);
    }

    // Endpoint pour récupérer les catégories avec leurs produits
    @GetMapping("/by-category")
    public ResponseEntity<List<Category>> getProductsByCategory() {
        List<Category> categories = productService.getProductsByCategory();
        return ResponseEntity.ok(categories);
    }

    // Added endpoint to fetch all products
    @GetMapping("/all")
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }




}
