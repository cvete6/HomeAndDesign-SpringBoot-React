package com.example.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NelloController {

    @RequestMapping("/")
    public String index(){
        return "ness";
    }
}
