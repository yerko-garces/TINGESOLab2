package com.cuotas.microservice.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cuota")
@CrossOrigin(origins = "http://localhost:5173")
public class CuotaController {
}
