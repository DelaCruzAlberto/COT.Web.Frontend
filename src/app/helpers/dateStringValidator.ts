import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DateStringValidator {
    
    constructor() {}

    comparadorFechas(listaFechaUno: number[], listaFechaDos: number[]) {
      const desde = new Date(listaFechaUno[0], listaFechaUno[1] - 1, listaFechaUno[2], 0, 0);
      const hasta = new Date(listaFechaDos[0], listaFechaDos[1] - 1, listaFechaDos[2], 0, 0);
      return desde <= hasta;
    }

    validarDesdeMayorQueHoy(fechaDesde: string){
      const fechaActual = new Date().toJSON().slice(0,10).split("-").map((numero: string) => Number(numero));
      const fechaDesdePartida = fechaDesde.split("T")[0].split("-").map((numero: string) => Number(numero));
      return this.comparadorFechas(fechaActual, fechaDesdePartida);
    }

    validarFechaDesdeMenorHasta(fechaDesde: string, fechaHasta:string ){
      if (fechaDesde === '' && fechaHasta === ''){
        return true;
      }
      const desde = fechaDesde.split("T")[0].split("-").map((numero: string) => Number(numero))
      const hasta = fechaHasta.split("T")[0].split("-").map((numero: string) => Number(numero))
      return this.comparadorFechas(desde, hasta);
    }

}