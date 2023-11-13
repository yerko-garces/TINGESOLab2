package com.cuotas.microservice.controller;

import com.cuotas.microservice.entity.CuotaEntity;
import com.cuotas.microservice.service.CuotaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/buscarPorRut/{rut}")
    public ResponseEntity<List<CuotaEntity>> buscarPorRut(@PathVariable String rut) {
        List<CuotaEntity> cuotas = cuotaService.buscarPorRut(rut);
        return ResponseEntity.ok(cuotas);
    }

    @PostMapping("/pagarCuota/{idCuota}")
    public ResponseEntity<String> pagarCuota(@PathVariable Long idCuota) {
        try {
            cuotaService.pagarCuota(idCuota);
            return ResponseEntity.ok("Cuota pagada correctamente.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al pagar cuota: " + e.getMessage());
        }
    }
}
