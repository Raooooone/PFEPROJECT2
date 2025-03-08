package com.example.backendeco.Service;

import com.example.backendeco.Repository.CategoryRepository;
import com.example.backendeco.Entity.Category;
import com.example.backendeco.Entity.Product;
import com.example.backendeco.Repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public ProductService(ProductRepository productRepository, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    // Add product with image and category
    public Product addProduct(String name, String description, Double price, MultipartFile image, Long categoryId) throws IOException {
        Product product = new Product();
        product.setName(name);
        product.setDescription(description);
        product.setPrice(price);

        // Handle image upload
        if (image != null && !image.isEmpty()) {
            product.setImage(image.getBytes());  // Assuming image is stored as bytes
        }

        // Fetch category by ID and set it to product
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new IllegalArgumentException("Category not found"));
        product.setCategory(category);

        return productRepository.save(product);
    }

    // Get all products from the database
    public List<Product> getAllProducts() {
        return productRepository.findAll();  // Ensure this returns all products
    }

    // Get products grouped by category (returning categories with their products)
    public List<Category> getProductsByCategory() {
        return categoryRepository.findAll();  // Fetch categories
    }
}
