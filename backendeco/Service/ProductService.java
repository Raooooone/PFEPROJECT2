package com.example.backendeco.Service;

import com.example.backendeco.Entity.Product;
import com.example.backendeco.Repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;


    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product addProduct(String name, String description, Double price, MultipartFile image) throws IOException {
        Product product = new Product();
        product.setName(name);
        product.setDescription(description);
        product.setPrice(price);

        if (image != null && !image.isEmpty()) {
            product.setImage(image.getBytes());
        }

        return productRepository.save(product);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
}
