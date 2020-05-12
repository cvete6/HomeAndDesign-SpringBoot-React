package com.example.demo;

import com.example.demo.model.Architect;
import com.example.demo.model.Category;
import com.example.demo.model.Project;
import com.example.demo.repository.jpa.ArchitectJpaRepository;
import com.example.demo.repository.jpa.CategoryJpaRepository;
import com.example.demo.repository.jpa.ProjectJpaRepository;
import org.hibernate.validator.constraints.Range;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

@SpringBootApplication
@ServletComponentScan

public class DemoApplication {

    public static void main(String[] args) {

        SpringApplication.run(DemoApplication.class, args);
    }


    @Bean
    public CommandLineRunner demo(ArchitectJpaRepository repository) {
        return (args) -> {
            // save a few customers
            repository.save(new Architect("Jack", "Bauer"));
            repository.save(new Architect("Chloe", "O'Brian"));
            repository.save(new Architect("Kim", "Bauer"));
            repository.save(new Architect("David", "Palmer"));
            repository.save(new Architect("Michelle", "Dessler"));

        };
    }
    @Bean
    public CommandLineRunner demoCategory(CategoryJpaRepository repository) {
        return (args) -> {
            repository.save(new Category("Modern is a broad design term that typically refers to a home with clean, crisp lines, a simple colour palette and the use of materials that can include metal, glass and steel. ", "Modern Design"));
            repository.save(new Category("Modern and contemporary are two styles frequently used interchangeably. Contemporary is different from modern because it describes design based on the here and now. ", "Contemporary Design"));
            repository.save(new Category("Traditional design style offers classic details, sumptuous furnishings, and an abundance of accessories. It is rooted in European sensibilities.","Traditional Design"));
            repository.save(new Category("Also referred to as Hollywood Regency, Hollywood Glam is a design style that tends to be luxurious, over-the-top and opulent. It’s a dramatic design style, perfect for a homeowner who enjoys making a statement.","Hollywood Glam"));
        };
    }

/*    @Bean
    public CommandLineRunner demoProject(ProjectJpaRepository repository) {
        return (args) -> {

            ArchitectJpaRepository architectJpaRepository = null;
            List<Architect> oldArchitect = (List<Architect>) architectJpaRepository.findByName(1L);
            List<Architect> oldArchitect3 = architectJpaRepository.findAllById(Collections.singleton(3L));
            List<Architect> oldArchitect4 = architectJpaRepository.findAllById(Collections.singleton(4L));

            CategoryJpaRepository categoryJpaRepository= null;
            Category category= categoryJpaRepository.findByName(1L);
            Category category3= categoryJpaRepository.findByName(3L);
            Category category4= categoryJpaRepository.findByName(4L);

            repository.save(new Project("project22" , LocalDate.parse("2020-04-01") , LocalDate.parse("2020-04-02"),"description of project2" ,oldArchitect,category));
            repository.save(new Project("project22" , LocalDate.parse("2020-04-01") , LocalDate.parse("2020-04-02"),"description of project2" ,oldArchitect3 ,category3));
            repository.save(new Project("project22" , LocalDate.parse("2020-04-01") , LocalDate.parse("2020-04-02"),"description of project2" ,oldArchitect4 ,category4));
            repository.save(new Project("project22" , LocalDate.parse("2020-04-01") , LocalDate.parse("2020-04-02"),"description of project2" ,oldArchitect ,category3));

        };
    }*/

}
 /*   @Component
    class DemoCommandLineRunner  implements CommandLineRunner {

        @Autowired
        private ArchitectJpaRepository architectJpaRepository;

        @Override
        public void run(String... args) throws Exception {

            Architect architect = null;
            architect.setName("Cvete");
            architect.setLastName("Trajkovska");

            architectJpaRepository.save(architect);

            Architect architect1 = null;
            architect1.setName("Irena");
            architect1.setLastName("Miloseska");

            architectJpaRepository.save(architect1);

            Architect architect2 = null;
            architect2.setName("Kate");
            architect2.setLastName("Trajkov");

            architectJpaRepository.save(architect2);

            Architect architect3 = null;

            architect3.setName("Kate");
            architect3.setLastName("Trajkov");

            architectJpaRepository.save(architect3);
        }
}*/
