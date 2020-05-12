package com.example.demo.service.impl;

import com.example.demo.model.Architect;
import com.example.demo.model.Category;
import com.example.demo.model.Project;
import com.example.demo.repository.jpa.ArchitectJpaRepository;
import com.example.demo.repository.jpa.CategoryJpaRepository;
import com.example.demo.repository.jpa.ProjectJpaRepository;
import com.example.demo.service.ProjectService;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService {

    private ProjectJpaRepository projectJpaRepository;
    private ArchitectJpaRepository architectJpaRepository;
    private CategoryJpaRepository categoryJpaRepository;

    public ProjectServiceImpl(ProjectJpaRepository projectJpaRepository, ArchitectJpaRepository architectJpaRepository, CategoryJpaRepository categoryJpaRepository) {
        this.projectJpaRepository = projectJpaRepository;
        this.architectJpaRepository= architectJpaRepository;
        this.categoryJpaRepository=categoryJpaRepository;
    }

    @Override
    public List<Project> getAllProject() {

        return projectJpaRepository.findAll();
    }

    @Override
    public Project getProjectById(Long id) {
        return projectJpaRepository.findProjectById(id);
    }

    @Override
    public List<Project> getProjectByName(String name) {
        return projectJpaRepository.getAllProjectByName(name);
    }

    @Override
    public List<Object> getAllProjectEvents() {
        return projectJpaRepository.findAllEvents();
    }

    @Override
    public List<Architect> getAllArchitectByProjectsName(String name) {
        return projectJpaRepository.getAllArchitectByProjectsName(name);
    }

  /*  @Override
    public Project addNewProject(String name, String from, String to, String description, List<Long> id_architects) {
        //kako na findByname da predadam eden po eden architect id
        List<Architect> exist_architects =new ArrayList<>();
        for (Long id :  id_architects) {
            if(architectJpaRepository.findById(id).isEmpty()){
                continue;
            }else {
                Architect architect = architectJpaRepository.findByName(id);
                exist_architects.add(architect);
            }

        }

        Project project = new Project(name,from,to,description,exist_architects);
        return projectJpaRepository.save(project);
    }
*/
    @Override
    public Project addNewProject(String name, LocalDate from, LocalDate to, String description, List<Long> id_architects, Long id_category) {
        //kako na findByname da predadam eden po eden architect id
        List<Architect> exist_architects =new ArrayList<>();


        for (Long id :  id_architects) {
            if(architectJpaRepository.findById(id).isEmpty()){
                continue;
            }else {
                Architect architect = architectJpaRepository.findByName(id);
                exist_architects.add(architect);
            }
        }

        Category category = categoryJpaRepository.findByName(id_category);
        Project project = new Project(name,from,to,description,exist_architects,category);
        return projectJpaRepository.save(project);
    }

    public Project editProject(Long id, String name, LocalDate from, LocalDate to, String description, List<Long> id_architects,Long id_category) {

        List<Architect> exist_architects =new ArrayList<>();
        for (Long id_architect :  id_architects) {
            if(architectJpaRepository.findById(id_architect).isEmpty()){
                continue;
            }else {
                Architect architect = architectJpaRepository.findByName(id_architect);
                exist_architects.add(architect);
            }
        }
        Category category=categoryJpaRepository.findByName(id_category);
        Project oldProject=  projectJpaRepository.findByProjectName(id);
        oldProject.setName(name);
        oldProject.setDescription(description);
        oldProject.setFrom(from);
        oldProject.setTo(to);
        oldProject.setArchitects(exist_architects);
        oldProject.setCategory(category);

        return projectJpaRepository.save(oldProject);
    }
    @Override
    public Void deleteProject(Long id) {
        Project project =projectJpaRepository.findByProjectName(id);

        projectJpaRepository.delete(project);
        return  null;
    }

}
