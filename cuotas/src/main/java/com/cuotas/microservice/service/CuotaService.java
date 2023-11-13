package com.cuotas.microservice.service;

import com.cuotas.microservice.entity.CuotaEntity;
import com.cuotas.microservice.repository.CuotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
            cuota.setRut(rut);
            cuota.setF_pago(fechaInicio.plusMonths(i));
            cuotaRepository.save(cuota);
        }
    }

    public List<CuotaEntity> buscarPorRut(String rut) {
        return cuotaRepository.findByRut(rut);
    }

    public void pagarCuota(Long idCuota) {
        Optional<CuotaEntity> optionalCuota = cuotaRepository.findById(idCuota);
        if (optionalCuota.isPresent()) {
            CuotaEntity cuota = optionalCuota.get();
            cuota.setPagado(true);
            cuotaRepository.save(cuota);
        }
    }

}
