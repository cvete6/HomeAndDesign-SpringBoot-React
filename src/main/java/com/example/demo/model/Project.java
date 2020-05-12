package com.example.demo.model;

import com.example.demo.repository.jpa.ArchitectJpaRepository;
import com.example.demo.repository.jpa.CategoryJpaRepository;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor

public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;


    @Column(name = "start_project")
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate from;

    @Column(name = "end_project")
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate to;

    private String description;

    @ManyToMany(fetch = FetchType.LAZY,cascade = CascadeType.PERSIST)
    private Set<Architect> architects;

    @JsonIgnore
    @ManyToOne
    private Category category;

    public Project(String name, LocalDate from, LocalDate to, String description,List<Architect> architects) {
        this.name=name;
        this.description=description;
        Set<Architect> a = new HashSet<>();
        for (Architect x : architects)
            a.add(x);
        this.architects=a;
        this.from=from;
        this.to=to;
    }
    public Project(String name, LocalDate from, LocalDate to, String description,List<Architect> architects,Category category) {
        this.name=name;
        this.description=description;
        Set<Architect> a = new HashSet<>();
        for (Architect x : architects)
            a.add(x);
        this.architects=a;
        this.from=from;
        this.to=to;
        this.category=category;
    }
    public Project(String name, LocalDate from, LocalDate to, String description) {
        this.name=name;
        this.description=description;
        this.from=from;
        this.to=to;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getFrom() {
        return from;
    }

    public void setFrom(LocalDate from) {
        this.from = from;
    }

    public LocalDate getTo() {
        return to;
    }

    public void setTo(LocalDate to) {
        this.to = to;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Architect> getArchitects() {
        List<Architect> items = new ArrayList<>();
        for (Architect e : architects)
            items.add(e);
        return items;
    }

    public void setArchitects(List<Architect> architects) {
        Set<Architect> p = new HashSet<>();
        for (Architect x : architects)
            p.add(x);
        this.architects = p;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    @PreRemove
    private void removeGroupsFromUsers() {
        for (Architect a : architects) {
            a.getProjects().remove(this);
        }
    }

}
