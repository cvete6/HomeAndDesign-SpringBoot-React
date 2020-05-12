package com.example.demo.service.impl;

import com.example.demo.model.News;
import com.example.demo.repository.NewsRepository;
import com.example.demo.repository.jpa.NewsJpaRepository;
import com.example.demo.service.NewsService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsServiceImpl implements NewsService {

    private NewsJpaRepository newsJpaRepository;


    public NewsServiceImpl(NewsJpaRepository newsJpaRepository){
        this.newsJpaRepository=newsJpaRepository ;
    }
    @Override
    public List<News> getNews() {
        return newsJpaRepository.findAll();
    }

    @Override
    public News createNews(String name, String content, int rating) {
        News news =new News(name,content,rating);
        return newsJpaRepository.save(news);
    }
}
