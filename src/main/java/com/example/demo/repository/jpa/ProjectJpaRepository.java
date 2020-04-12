package com.example.demo.repository.jpa;

import com.example.demo.model.Architect;
import com.example.demo.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ProjectJpaRepository extends JpaRepository<Project,Long> {


    @Query("select p from Project p where p.id=:id ")
    List<Project> findByName(@Param("id") List<Long> id);

    @Query(" select  p from Project p where p.id=:id")
    Project findProjectById(@Param("id") Long id);

    //search all projects by name
    @Query("select p from Project p where p.name=:name")
    List<Project> getAllProjectByName(@Param("name") String name);

    //search all architects by project  name
    @Query("select a from Architect a join a.projects p where p.name=:name")
    List<Architect> getAllArchitectByProjectsName(@Param("name") String name);


    @Query("select p from Project p where p.id=:project_id ")
    Project findByProjectName(@Param("project_id") Long project_id);

    @Query("select p from Project p join p.architects a where a.id=:id")
    List<Project> getAllProjectByArchitectId(@Param("id") Long id);


    @Query("select p.name, p.from, p.to from Project p  ")
    List<Object> findAllEvents();
}
