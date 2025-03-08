package com.example.backendeco.Service;

import com.example.backendeco.Entity.Category;
import com.example.backendeco.Entity.Product;
import com.example.backendeco.Repository.CategoryRepository;
import com.example.backendeco.Repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final ProductRepository productRepository;

    // Injection par constructeur
    public CategoryService(CategoryRepository categoryRepository, ProductRepository productRepository) {
        this.categoryRepository = categoryRepository;
        this.productRepository = productRepository;
    }

    // Créer une nouvelle catégorie
    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    // Récupérer toutes les catégories
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    // Récupérer une catégorie par ID
    public Category getCategoryById(Long id) {
        Optional<Category> category = categoryRepository.findById(id);
        return category.orElse(null);
    }

    // Mettre à jour une catégorie
    public Category updateCategory(Long id, Category category) {
        Optional<Category> existingCategory = categoryRepository.findById(id);
        if (existingCategory.isPresent()) {
            category.setId(id);
            return categoryRepository.save(category);
        }
        return null;
    }

    // Supprimer une catégorie
    public boolean deleteCategory(Long id) {
        Optional<Category> category = categoryRepository.findById(id);
        if (category.isPresent()) {
            categoryRepository.delete(category.get());
            return true;
        }
        return false;
    }

    // Récupérer les produits d'une catégorie
    public List<Product> getProductsByCategory(Long categoryId) {
        List<Product> products = productRepository.findByCategoryId(categoryId);
        System.out.println("Produits récupérés pour la catégorie " + categoryId + " : " + products);
        return products;
    }

}
