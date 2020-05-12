package com.example.demo.service;

import com.example.demo.model.Architect;
import com.example.demo.model.Category;
import com.example.demo.model.Project;

import java.time.LocalDate;
import java.util.List;

public interface ProjectService {
    List<Project> getAllProject();

    Project getProjectById(Long id);

    List<Architect> getAllArchitectByProjectsName(String name);

    Project addNewProject(String name, LocalDate from, LocalDate to, String description, List<Long> id_architects, Long id_category);

    List<Project> getProjectByName(String name);

    List<Object> getAllProjectEvents() ;

    Project editProject(Long id, String name, LocalDate from, LocalDate to, String description, List<Long> id_architects,Long id_category);

    Void deleteProject(Long id);

    }
