package com.alumnos.microservice.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
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

    private String apellido_paterno;

    private String apellido_materno;

    private String primer_nombre;

    private String segundo_nombre;

    private LocalDate nacimiento;

    private String tipo_colegio_procedencia;

    private String nombre_colegio;

    private Integer anio_egreso_colegio;

}

