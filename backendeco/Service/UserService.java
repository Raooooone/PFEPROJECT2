package com.example.backendeco.Service;

import com.example.backendeco.Entity.User;
import com.example.backendeco.Repository.UserRepository;
import com.example.backendeco.enums.UserRole;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    // Injection par constructeur
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Inscription d'un utilisateur
    public User registerUser(String username, String email, String password, String adresse, UserRole role) {
        // Check if the user already exists
        if (userRepository.findByEmail(email) != null) {
            throw new IllegalArgumentException("L'utilisateur avec cet email existe déjà");
        }

        // Vérification si l'email appartient à un admin
        if (role == UserRole.ADMIN && !email.endsWith("@admin.com")) {
            throw new IllegalArgumentException("L'email de l'admin doit se terminer par @admin.com");
        }

        // Si c'est un admin, on ne permet pas l'inscription, seulement la connexion
        if (role == UserRole.ADMIN) {
            throw new IllegalArgumentException("L'admin ne peut pas s'inscrire, il doit se connecter.");
        }

        // Créer un nouvel utilisateur avec le rôle spécifié
        User user = new User(username, email, password, adresse, role);
        return userRepository.save(user);
    }

    // Connexion d'un utilisateur
    public User loginUser(String email, String password) {
        // Trouver l'utilisateur par son email
        User user = userRepository.findByEmail(email);

        // Vérification du mot de passe
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }

        // Retourner null si l'email ou le mot de passe est incorrect
        return null;
    }

    // Vérification du rôle de l'utilisateur
    public boolean isAdmin(User user) {
        // Vérifier si l'utilisateur est un admin
        return UserRole.ADMIN.equals(user.getRole());
    }
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    public User updateUser(Long id, User userDetails) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Utilisateur non trouvé"));
        user.setUsername(userDetails.getUsername());
        user.setEmail(userDetails.getEmail());
        user.setAdresse(userDetails.getAdresse());
        // Vous pouvez également mettre à jour d'autres champs si nécessaire
        return userRepository.save(user);
    }


}
