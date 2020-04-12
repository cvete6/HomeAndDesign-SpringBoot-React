package com.example.demo.service;

import com.example.demo.model.Architect;
import com.example.demo.model.Project;

import java.util.List;
import java.util.Optional;

public interface ArchitectService {

    List<Architect> getAllArchitects();

    List<Architect> getAllArchitectByProjects(Long id);

    List<Architect> getArchitectByName(String name);

    Architect getArchitectById(Long id);

    Architect addNewArchitect( String Name, String lastName, List<Long> id_project);

    Architect addArchitect( String Name, String lastName);

    Architect editArchitect(Long id, String Name, String lastName, List<Long> id_project);

    Architect editArchitect(Long id, String Name, String lastName);

    Void deleteArchitect(Long id);

    List<Project> getAllProjectByArchitectId(Long id);
}
