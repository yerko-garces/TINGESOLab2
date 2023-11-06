package com.alumnos.microservice.controller;
import com.alumnos.microservice.entity.AlumnoEntity;
import com.alumnos.microservice.service.AlumnoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("/alumno")
public class AlumnoController {

    @Autowired
    AlumnoService alumnoService;

    @PostMapping("/agregarAlumno")
    public ResponseEntity<AlumnoEntity> agregarAlumno(@RequestBody AlumnoEntity nuevoAlumno) {
        alumnoService.agregarAlumno(nuevoAlumno);
        return ResponseEntity.ok(nuevoAlumno);
    }
}
