package com.alumnos.microservice.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "alumno")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AlumnoEntity {

    @Id
    @Column(unique = true, nullable = false)
    private String rut;

    private String apelleido_paterno;

    private String apelleido_materno;

    private String primer_nombre;

    private String segundo_nombre;

    private LocalDate nacimiento;

    private String tipo_colegio_procedencia;

    private String nombre_colegio;

    private Integer año_egreso_colegio;

}

