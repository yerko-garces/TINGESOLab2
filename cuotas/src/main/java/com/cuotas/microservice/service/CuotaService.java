package com.cuotas.microservice.service;

import com.cuotas.microservice.entity.CuotaEntity;
import com.cuotas.microservice.repository.CuotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class CuotaService {

    @Autowired
    CuotaRepository cuotaRepository;
    public Double calcularCuota(Double total, Integer cantidadCuotas){
        Double cuotas  = total / cantidadCuotas;
        return cuotas;
    }

    public void generarCuotas(String rut, Integer cantidad, Double monto) {

        LocalDate fechaInicio = LocalDate.now().withMonth(3).withDayOfMonth(10);

        for (int i = 0; i < cantidad; i++) {
            CuotaEntity cuota = new CuotaEntity();
            cuota.setPagado(false);
            cuota.setC_cuotas(cantidad);
            cuota.setPago_mensual(monto);
            cuota.setRut_alumno(rut);
            cuota.setF_pago(fechaInicio.plusMonths(i));
            cuotaRepository.save(cuota);
        }
    }

}
