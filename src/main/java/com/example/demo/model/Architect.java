package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Architect {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    private Long id;

    private String Name;

    private String lastName;

    @JsonIgnore
    @NotFound(action = NotFoundAction.IGNORE)
    @ManyToMany(mappedBy = "architects",fetch = FetchType.LAZY,cascade = CascadeType.PERSIST)
    private Set<Project> projects;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public List<Project> getProjects() {
        List<Project> items = new ArrayList<>();
        for (Project e : projects)
            items.add(e);
        return items;
    }

    public void setProjects(List<Project> projects) {
        Set<Project> p = new HashSet<>();
        for (Project x : projects)
            p.add(x);
        this.projects = p;
    }


    public Architect(String Name, String lastName, List<Project> projects) {
        this.Name=Name;
        this.lastName=lastName;
        Set<Project> p = new HashSet<>();
        for (Project x : projects)
            p.add(x);
        this.projects=p;
    }

    public Architect(String Name, String lastName) {
        this.Name=Name;
        this.lastName=lastName;
    }

}
