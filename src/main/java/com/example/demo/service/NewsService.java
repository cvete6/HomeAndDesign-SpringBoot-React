package com.example.demo.service;

import com.example.demo.model.News;

import javax.persistence.Column;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.util.List;

public interface NewsService {

    List<News> getNews();
    News createNews(String name, String content, int rating);
}