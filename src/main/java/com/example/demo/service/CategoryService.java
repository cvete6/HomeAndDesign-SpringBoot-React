package com.example.demo.service;


import com.example.demo.model.Category;
import com.example.demo.model.Project;

import java.util.List;

public interface CategoryService {
    List<Category> getAllCategory();

    Category getCategoryById(Long id);

    List<Project> getAllProjectsByCategory(Long id);

    Category getCategoryFromProject(Long id);

    Category addNewCategory(String description, String projectType);

    Project addCategoryToProject(Long id_category, List<Long> id_project);
}
