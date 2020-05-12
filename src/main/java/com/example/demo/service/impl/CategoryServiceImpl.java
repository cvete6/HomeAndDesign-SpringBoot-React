package com.example.demo.service.impl;

import com.example.demo.model.Category;
import com.example.demo.model.Project;
import com.example.demo.repository.jpa.CategoryJpaRepository;
import com.example.demo.repository.jpa.ProjectJpaRepository;
import com.example.demo.service.CategoryService;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    private ProjectJpaRepository projectJpaRepository;

    private CategoryJpaRepository categoryJpaRepository;

    public CategoryServiceImpl(ProjectJpaRepository projectJpaRepository, CategoryJpaRepository categoryJpaRepository) {
        this.projectJpaRepository = projectJpaRepository;
        this.categoryJpaRepository = categoryJpaRepository;
    }


    @Override
    public List<Category> getAllCategory() {
        return categoryJpaRepository.findAll();
    }

    @Override
    public Category getCategoryById(Long id)
    {
        return categoryJpaRepository.findByName(id);
    }

    @Override
    public List<Project> getAllProjectsByCategory(Long id) {
        return categoryJpaRepository.findAllProjectsByCategory(id);
    }

    @Override
    public Category getCategoryFromProject(Long id) {
        return categoryJpaRepository.getCategoryFromProject(id);
    }

    @Override
    public Category addNewCategory(String description, String projectType) {
        Category newCategory = new Category(description,projectType);
        return categoryJpaRepository.save(newCategory);
    }

    @Override
    public Project addCategoryToProject(Long id_category, List<Long> id_project) {
        if(projectJpaRepository.findByName(id_project).isEmpty()){
            System.out.println("nema takov proekt");
        }

            Category existCategory= categoryJpaRepository.findByName(id_category);
            List<Project> existProject =projectJpaRepository.findByName(id_project);
            //go najdov proeto sega treba da mu dodadam categorija
            existProject.get(0).setCategory(existCategory);

            return projectJpaRepository.save(existProject.get(0));
    }


}
