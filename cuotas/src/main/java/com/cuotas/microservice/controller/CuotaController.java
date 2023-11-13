package com.cuotas.microservice.controller;

import com.cuotas.microservice.service.CuotaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cuota")
@CrossOrigin(origins = "http://localhost:3000")
public class CuotaController {

    @Autowired
    CuotaService cuotaService;

    @PostMapping("/generarCuotas/{rut}/{cantidad}/{monto}")
    public ResponseEntity<String> generarCuotas(@PathVariable String rut, @PathVariable Integer cantidad, @PathVariable Double monto) {
        try {
            cuotaService.generarCuotas(rut, cantidad, monto);
            return ResponseEntity.ok("Cuotas generadas correctamente.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al generar cuotas: " + e.getMessage());
        }
    }
}
