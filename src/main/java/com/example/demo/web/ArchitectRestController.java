package com.example.demo.web;

import com.example.demo.model.Architect;
import com.example.demo.service.impl.ArchitectServiceImpl;

import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/architects")
public class ArchitectRestController {

    private ArchitectServiceImpl architectService;

    public ArchitectRestController(ArchitectServiceImpl architectService) {
        this.architectService = architectService;
    }

    @GetMapping
    public List<Architect> getAllArchitects(){
        return architectService.getAllArchitects();
    }

    @GetMapping("/{name}")//search from all architect by name
    public List<Architect> getAllArchitectByName(@PathVariable String name){//search all architects by {id_project}
        return architectService.getArchitectByName(name);
    }

    @GetMapping("/project/{id}")
    public List<Architect> getAllArchitectByProjects(@PathVariable Long id){//search all architects by {id_project}
        return architectService.getAllArchitectByProjects(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Architect createArchitect( @RequestParam("Ime") String Name,
                                      @RequestParam("lastName") String lastName,
                                      @RequestParam("id_project")  List<Long> id_project,
                                      HttpServletResponse response,
                                      UriComponentsBuilder builder) {

        Architect newArchitect = architectService.addNewArchitect(Name,lastName,id_project);
        response.setHeader("Location", builder.path("/architects/{name}").buildAndExpand(newArchitect.getId()).toUriString());
        return newArchitect;
    }

    @PutMapping("/edit/{id}")
    public Architect editArchitect(@PathVariable Long id,
                             @RequestParam("Name") String Name,
                             @RequestParam("lastName") String lastName,
                             @RequestParam("id_project") List<Long> id_project){

        return architectService.editArchitect(id,Name,lastName,id_project);
    }

    @DeleteMapping("/{id}")
    public void deleteArchitect(@PathVariable Long id) {
        architectService.deleteArchitect(id);
    }



}
