package com.example.demo.repository.jpa;

import com.example.demo.model.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface NewsJpaRepository extends JpaRepository<News,Long> {
}
