package com.alumnos.microservice.service;

import com.alumnos.microservice.entity.AlumnoEntity;
import com.alumnos.microservice.repository.AlumnoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AlumnoService {

    @Autowired
    AlumnoRepository alumnoRepository;

    public AlumnoEntity agregarAlumno(AlumnoEntity alumno) {
        return alumnoRepository.save(alumno);
    }
}

