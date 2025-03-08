package com.example.backendeco.Entity;

import com.example.backendeco.enums.UserRole;
import jakarta.persistence.*;
import lombok.Data;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String email;
    private String password;
    private String adresse;

    @Enumerated(EnumType.STRING)
    private UserRole role; // ADMIN / CLIENT

    // Constructeur par défaut
    public User() {}

    // Constructeur avec tous les paramètres
    public User(String username, String email, String password, String adresse, UserRole role) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.adresse = adresse;
        this.role = role;
    }

    // Getters et Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }

    // Méthode toString() pour faciliter le débogage et l'affichage
    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", adresse='" + adresse + '\'' +
                ", role=" + role +
                '}';
    }
}
