package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;
import java.util.Locale;

@Entity
@NoArgsConstructor
@AllArgsConstructor

public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;


    @Column(name = "startProject")
    private String from;

    @Column(name = "endProject")
    private String to;

    private String description;

    @ManyToMany(fetch = FetchType.EAGER)
    private List<Architect> architects;

    @JsonIgnore
    @ManyToOne
    private Category category;

    public Project(String name, String from, String to, String description,List<Architect> architects) {
        this.name=name;
        this.description=description;
        this.architects=architects;
        this.from=from;
        this.to=to;
    }
    public Project(String name, String from, String to, String description) {
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

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Architect> getArchitects() {
        return architects;
    }

    public void setArchitects(List<Architect> architects) {
        this.architects = architects;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

}
