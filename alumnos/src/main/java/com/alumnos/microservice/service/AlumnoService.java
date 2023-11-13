package com.alumnos.microservice.service;

import com.alumnos.microservice.entity.AlumnoEntity;
import com.alumnos.microservice.repository.AlumnoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class AlumnoService {

    @Autowired
    AlumnoRepository alumnoRepository;

    public AlumnoEntity agregarAlumno(AlumnoEntity alumno) {
        return alumnoRepository.save(alumno);
    }

    public List<AlumnoEntity> mostrarAlumnos(){return alumnoRepository.findAll();}

    public Double calcularMontoTotal(String rut){

        Optional<AlumnoEntity> alumno = alumnoRepository.findById (rut);

        Double precioInicial = Double.valueOf(1500000);
        Integer auxiliar = 0;

        switch (alumno.get().getTipo_colegio_procedencia() ){
            case "Municipal":
                precioInicial = precioInicial - (1500000 * 0.2);
                auxiliar = 1;
                break;

            case "Subvencionado":
                precioInicial = precioInicial - (1500000 * 0.1);
                auxiliar = 2;
                break;

            case "Privado":
                auxiliar = 3;
                break;
        }

        Integer aniosDeEgreso = LocalDateTime.now().getYear() - alumno.get().getAnio_egreso_colegio() ;

        if(aniosDeEgreso == 0){
            precioInicial = precioInicial - (precioInicial * 0.15);
        }

        if(aniosDeEgreso == 1 || aniosDeEgreso == 2){
            precioInicial = precioInicial - (precioInicial * 0.08);
        }

        if(aniosDeEgreso == 3 || aniosDeEgreso == 4){
            precioInicial = precioInicial - (precioInicial * 0.04);
        }

        return precioInicial;
    }

    public Map<String, String> cantidadCuotas(String rut) {
        Optional<AlumnoEntity> alumno = alumnoRepository.findById(rut);
        Map<String, String> response = new HashMap<>();

        if (alumno.isPresent()) {
            switch (alumno.get().getTipo_colegio_procedencia()) {
                case "Municipal":
                    response.put("cantidadCuotas", "diez");
                    break;
                case "Subvencionado":
                    response.put("cantidadCuotas", "siete");
                    break;
                case "Privado":
                    response.put("cantidadCuotas", "cuatro");
                    break;
                default:
                    response.put("cantidadCuotas", "0");
            }
        } else {
            response.put("cantidadCuotas", "0");
        }

        return response;
    }

    public String obtenerTipoColegio(String rut) {
        Optional<AlumnoEntity> alumnoOptional = alumnoRepository.findById(rut);

        if (alumnoOptional.isPresent()) {
            return alumnoOptional.get().getTipo_colegio_procedencia();
        } else {
            return "No se encontró al alumno con el rut proporcionado";
        }
    }


    public Double calcularCuota(Double total, Integer cantidadCuotas){
        Double cuotas  = total / cantidadCuotas;
        return cuotas;
    }
}

