package com.alumnos.microservice.controller;
import com.alumnos.microservice.entity.AlumnoEntity;
import com.alumnos.microservice.service.AlumnoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/alumno")
@CrossOrigin(origins = "http://localhost:3000")
public class AlumnoController {

    @Autowired
    AlumnoService alumnoService;

    @PostMapping("/agregarAlumno")
    public ResponseEntity<AlumnoEntity> agregarAlumno(@RequestBody AlumnoEntity nuevoAlumno) {
        alumnoService.agregarAlumno(nuevoAlumno);
        return ResponseEntity.ok(nuevoAlumno);
    }

    @GetMapping("/todos")
    public List<AlumnoEntity> obtenerTodosLosAlumnos() {
        return alumnoService.mostrarAlumnos();
    }

    @GetMapping("/calcularMontoTotal/{rut}")
    public Double calcularMontoTotal(@PathVariable String rut) {
        Double monto = alumnoService.calcularMontoTotal(rut);
        return monto;
    }

    @GetMapping("/tipoColegio/{rut}")
    public ResponseEntity<String> obtenerTipoColegio(@PathVariable String rut) {
        System.out.println("Entrando a obtenerTipoColegio");
        String tipoColegio = alumnoService.obtenerTipoColegio(rut);
        System.out.println("Tipo de Colegio: " + tipoColegio);
        return ResponseEntity.ok().body(tipoColegio);
    }
    @GetMapping("/montoInicial/{rut}")
    public ResponseEntity<Double> obtenerMontoTotal(@PathVariable String rut) {
        try {
            Double montoTotal = alumnoService.calcularMontoTotal(rut);
            return ResponseEntity.ok(montoTotal);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

}
