package com.example.demo.web;

import com.example.demo.model.Architect;
import com.example.demo.model.Category;
import com.example.demo.model.Project;
import com.example.demo.service.impl.CategoryServiceImpl;
import com.example.demo.service.impl.ProjectServiceImpl;
import org.springframework.cglib.core.CollectionUtils;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import org.thymeleaf.util.ArrayUtils;

import javax.servlet.http.HttpServletResponse;
import java.lang.reflect.Array;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/projects")
public class ProjectRestController {
    private ProjectServiceImpl projectService;

    public ProjectRestController(ProjectServiceImpl projectService) {
        this.projectService = projectService;
    }

    @GetMapping
    List<Project> getAllProjects(){
        return projectService.getAllProject();
    }

    @GetMapping("/{name}")//search from all Project by name
    public List<Project> getAllProjectByName(@PathVariable String name){//search all architects by {id_project}
        return projectService.getProjectByName(name);
    }

    @GetMapping("/id/{id}")
    public Project getProjectById(@PathVariable Long id){
        return projectService.getProjectById(id);
    }

    @GetMapping("/events")
    List<Object> getAllProjectsEvents(){
        return projectService.getAllProjectEvents();
    }

    //the same like in ArchitectController but here we search by project string name
    @GetMapping("/{name}/architects")
    public List<Architect> getAllArchitectByProjectsName( @PathVariable String name){//search all architects by {id_project}
        return projectService.getAllArchitectByProjectsName(name);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Project createProject( @RequestParam("name") String name,
                                      @RequestParam("from") String f,
                                      @RequestParam("to" ) String t,
                                      @RequestParam("description") String description,
                                      @RequestParam("id_architect") List<Long> id_architects,
                                      @RequestParam("id_category") Long id_category,
                                      HttpServletResponse response,
                                      UriComponentsBuilder builder) {
        //Category category = categoryService.getCategoryById(id_category);
        LocalDate from = LocalDate.parse(f);
        LocalDate to =LocalDate.parse(t);

        Project newProject= projectService.addNewProject(name,from,to,description,id_architects,id_category);//mi treba cela CATEGORU ne samo id
        response.setHeader("Location", builder.path("/projects/{name}").buildAndExpand(newProject.getId()).toUriString());
        return newProject;
    }

    @PutMapping("/edit/{id}")
    public Project editProject(@PathVariable Long id,
                               @RequestParam("name") String name,
                               @RequestParam("from")  String f,
                               @RequestParam("to" )   String t,
                               @RequestParam("description") String description,
                               @RequestParam("id_architect") List<Long> id_architects,
                               @RequestParam("id_category") Long id_category){

        LocalDate from = LocalDate.parse(f);
        LocalDate to =LocalDate.parse(t);
        return projectService.editProject(id,name,from,to,description,id_architects,id_category);
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable Long id) {
        projectService.deleteProject(id);
    }



}
