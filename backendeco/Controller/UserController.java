package com.example.backendeco.Controller;

import com.example.backendeco.Entity.User;
import com.example.backendeco.Service.UserService;
import com.example.backendeco.enums.UserRole;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;


    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            User registeredUser = userService.registerUser(user.getUsername(), user.getEmail(), user.getPassword(), user.getAdresse(), user.getRole());
            return ResponseEntity.status(HttpStatus.CREATED).body(registeredUser);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }


    // Endpoint pour la connexion d'un utilisateur

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        try {

            User authenticatedUser = userService.loginUser(user.getEmail(), user.getPassword());
            if (authenticatedUser == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email ou mot de passe incorrect");
            }
            return ResponseEntity.ok(authenticatedUser);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        try {
            userService.deleteUser(id);
            return ResponseEntity.ok("Utilisateur supprimé avec succès");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Utilisateur non trouvé");
        }
    }


    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        try {
            User updatedUser = userService.updateUser(id, userDetails);
            return ResponseEntity.ok(updatedUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Utilisateur non trouvé");
        }
    }
}
