package com.example.demo.web;

import com.example.demo.model.Category;
import com.example.demo.model.News;
import com.example.demo.model.Project;
import com.example.demo.service.CategoryService;
import com.example.demo.service.NewsService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/news")
public class NewsRestController {

    private NewsService newsService;

    public NewsRestController(NewsService newsService)
    {
        this.newsService=newsService;
    }

    @GetMapping
    List<News> getAllCategory(){
        return newsService.getNews();
    }


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public News createNews( @RequestParam("name") String name,
                                  @RequestParam("content") String content,
                                  @RequestParam("rating") int rating,
                                  HttpServletResponse response,
                                  UriComponentsBuilder builder) {

        News news = newsService.createNews(name,content,rating);
        response.setHeader("Location", builder.path("/categories").buildAndExpand(news.getId()).toUriString());
        return news;
    }

}
