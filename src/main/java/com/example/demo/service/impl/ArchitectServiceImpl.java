package com.example.demo.service.impl;

import com.example.demo.model.Architect;
import com.example.demo.model.Project;
import com.example.demo.repository.jpa.ArchitectJpaRepository;
import com.example.demo.repository.jpa.ProjectJpaRepository;
import com.example.demo.service.ArchitectService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArchitectServiceImpl implements ArchitectService {

    private ArchitectJpaRepository architectJpaRepository;
    private ProjectJpaRepository projectJpaRepository;

    public ArchitectServiceImpl(ArchitectJpaRepository architectJpaRepository, ProjectJpaRepository projectJpaRepository) {
        this.architectJpaRepository = architectJpaRepository;
        this.projectJpaRepository= projectJpaRepository;
    }

    @Override
    public List<Architect> getAllArchitects() {
        return architectJpaRepository.findAll();
    }

    @Override
    public List<Architect> getArchitectByName(String name) {
        return architectJpaRepository.getAllArchitectByName(name);
    }

    @Override
    public List<Architect> getAllArchitectByProjects(Long id) {
        return architectJpaRepository.getAllArchitectByProjects(id);
    }


    @Override
    public Architect addNewArchitect( String Name, String lastName, List<Long> id_project) {
        List<Project> project = (List<Project>) projectJpaRepository.findByName(id_project);

        Architect newArchitect = new Architect(Name, lastName, project);
        return architectJpaRepository.save(newArchitect);
    }


    @Override
    public Architect editArchitect(Long id, String Name, String lastName, List<Long> id_project) {
        List<Project> projects= projectJpaRepository.findByName(id_project);

        Architect oldArchitect= architectJpaRepository.findByName(id);
        oldArchitect.setName(Name);
        oldArchitect.setLastName(lastName);
        oldArchitect.setProjects(projects);

        return architectJpaRepository.save(oldArchitect);
    }

    @Override
    public Void deleteArchitect(Long id) {
        Architect architect= architectJpaRepository.findByName(id);
        architectJpaRepository.delete(architect);
        return null;
    }



}
