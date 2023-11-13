package com.cuotas.microservice.repository;

import com.cuotas.microservice.entity.CuotaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CuotaRepository extends JpaRepository<CuotaEntity, Long> {
    List<CuotaEntity> findByRut(String rutAlumno);
}
