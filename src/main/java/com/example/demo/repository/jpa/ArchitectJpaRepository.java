package com.example.demo.repository.jpa;

import com.example.demo.model.Architect;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ArchitectJpaRepository extends JpaRepository<Architect,Long> {

    //search all architects by name of architect
    @Query("select a from Architect a where a.Name=:Name")
    List<Architect> getAllArchitectByName(@Param("Name") String Name);

    //search all architects by project
    @Query("select a from Architect a join a.projects p where p.id=:id ")
    List<Architect> getAllArchitectByProjects(@Param("id") Long id);


    @Query("select a from Architect a where a.id=:id ")
    Architect findByName(@Param("id") Long id);







}
