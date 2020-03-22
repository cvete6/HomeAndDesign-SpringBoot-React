package com.example.demo.service;

import com.example.demo.model.Architect;
import com.example.demo.model.Project;

import java.util.List;

public interface ProjectService {
    List<Project> getAllProject();

    List<Architect> getAllArchitectByProjectsName(String name);

    Project addNewProject(String name,String from, String to, String description,List<Long> id_architects);

    List<Project> getProjectByName(String name);

    Project editProject(Long id, String name, String from, String to, String description, List<Long> id_architects);

    void deleteProject(Long id);

    }
