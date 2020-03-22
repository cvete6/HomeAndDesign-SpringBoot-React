package com.example.demo.web;

import com.example.demo.model.Category;
import com.example.demo.model.Project;
import com.example.demo.service.CategoryService;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryRestController {

    private CategoryService categoryService;

    public CategoryRestController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping
    List<Category> getAllCategory(){
        return categoryService.getAllCategory();
    }

    @GetMapping("/{category_id}/projects")
    List<Project> getAllProjectsByCategory(@PathVariable Long category_id){

        return categoryService.getAllProjectsByCategory(category_id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Category createCategory( @RequestParam("description") String description,
                                  @RequestParam("projectType") String projectType,
                                  HttpServletResponse response,
                                  UriComponentsBuilder builder) {

        Category newCategory=categoryService.addNewCategory(description,projectType);
        response.setHeader("Location", builder.path("/categories").buildAndExpand(newCategory.getId()).toUriString());
        return newCategory;
    }

    @PutMapping
    @ResponseStatus(HttpStatus.CREATED)
    public  Project addCategoryToProject(@RequestParam("id_category") Long id_category,
                                         @RequestParam("id_project") List<Long> id_project,
                                         HttpServletResponse response,
                                         UriComponentsBuilder builder ){
        Project newProject=categoryService.addCategoryToProject(id_category,id_project);
        response.setHeader("Location", builder.path("/categories").buildAndExpand(newProject.getId()).toUriString());
        return newProject;
    }
}
