package com.cuotas.microservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AlumnoModel {
    private String rut;

    private String apellido_paterno;

    private String apellido_materno;

    private String primer_nombre;

    private String segundo_nombre;

    private LocalDate nacimiento;

    private String tipo_colegio_procedencia;

    private String nombre_colegio;

    private Integer anio_egreso_colegio;
}
