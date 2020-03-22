package com.example.demo.repository.jpa;

import com.example.demo.model.Architect;
import com.example.demo.model.Category;
import com.example.demo.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CategoryJpaRepository extends JpaRepository<Category,Long> {

    @Query("select c from Category c where c.id=:id ")
    Category findByName(@Param("id") Long id);

    @Query("select p from Project p join p.category c where c.id=:id")//pazi ovde mn bitno e ako ti treba proekti da vratis prebaruvas vo proekti i toj rezultato so go imas go sporeduvas so c od category id jata mu gi sporeduvas
    List<Project> findAllProjectsByCategory(@Param("id") Long id);

}
