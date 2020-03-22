package com.example.demo.web;

import com.example.demo.model.Architect;
import com.example.demo.model.Project;
import com.example.demo.service.impl.ProjectServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
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

    //the same like in ArchitectController but here we search by project string name
    @GetMapping("/{name}/architects")
    public List<Architect> getAllArchitectByProjectsName( @PathVariable String name){//search all architects by {id_project}
        return projectService.getAllArchitectByProjectsName(name);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Project createProject( @RequestParam("name") String name,
                                      @RequestParam("from") String from,
                                      @RequestParam("to" )String to,
                                      @RequestParam("description") String description,
                                      @RequestParam("id_architect") List<Long> id_architects,
                                      HttpServletResponse response,
                                      UriComponentsBuilder builder) {

        Project newProject= projectService.addNewProject(name,from,to,description,id_architects);
        response.setHeader("Location", builder.path("/projects/{name}").buildAndExpand(newProject.getId()).toUriString());
        return newProject;
    }

    @PutMapping("/edit/{id}")
    public Project editProject(@PathVariable Long id,
                               @RequestParam("name") String name,
                               @RequestParam("from") String from,
                               @RequestParam("to" )String to,
                               @RequestParam("description") String description,
                               @RequestParam("id_architect") List<Long> id_architects){

        return projectService.editProject(id,name,from,to,description,id_architects);
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable Long id) {
        projectService.deleteProject(id);
    }


}
