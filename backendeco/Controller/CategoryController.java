package com.example.backendeco.Controller;

import com.example.backendeco.Entity.Category;
import com.example.backendeco.Entity.Product;
import com.example.backendeco.Service.CategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryController {

    private final CategoryService categoryService;

    // Injection par constructeur
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    /**
     * Créer une nouvelle catégorie.
     */
    @PostMapping
    public ResponseEntity<Category> createCategory(@RequestBody Category category) {
        Category createdCategory = categoryService.createCategory(category);
        return ResponseEntity.status(201).body(createdCategory);
    }

    /**
     * Récupérer toutes les catégories.
     */
    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories() {
        List<Category> categories = categoryService.getAllCategories();
        System.out.println("Categories récupérées: " + categories);
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }


    /**
     * Récupérer une catégorie par ID.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable Long id) {
        Category category = categoryService.getCategoryById(id);
        return (category != null)
                ? ResponseEntity.ok(category)
                : ResponseEntity.notFound().build();
    }

    /**
     * Mettre à jour une catégorie existante.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Category> updateCategory(@PathVariable Long id, @RequestBody Category category) {
        Category updatedCategory = categoryService.updateCategory(id, category);
        return (updatedCategory != null)
                ? ResponseEntity.ok(updatedCategory)
                : ResponseEntity.notFound().build();
    }

    /**
     * Supprimer une catégorie.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable Long id) {
        boolean deleted = categoryService.deleteCategory(id);
        return deleted
                ? ResponseEntity.noContent().build()
                : ResponseEntity.notFound().build();
    }

    /**
     * Récupérer tous les produits d'une catégorie donnée.
     */
    @GetMapping("/{id}/products")
    public ResponseEntity<List<Product>> getProductsByCategory(@PathVariable Long id) {
        List<Product> products = categoryService.getProductsByCategory(id);
        return (products != null)
                ? ResponseEntity.ok(products)
                : ResponseEntity.notFound().build();
    }
    @GetMapping("/test/products/{categoryId}")
    public List<Product> testFindProducts(@PathVariable Long categoryId) {
        return categoryService.getProductsByCategory(categoryId);
    }

}