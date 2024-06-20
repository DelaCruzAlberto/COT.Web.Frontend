import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Environment } from "./environments/environment";

@Injectable()
export class Request {


    constructor(public http: HttpClient) { }

    private getHeaders(): HttpHeaders {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Cross-Origin-Embedder-Policy': 'require-corp',
            'Cross-Origin-Opener-Policy': 'same-origin'
        });
        return headers;
    }

    async get(url: string): Promise<any> {
        const headers = this.getHeaders();
        return await lastValueFrom(this.http.get(`${Environment.BASE_URL}${url}`, { headers })
            .pipe(
                catchError((error) => {
                    throw error;
                })
            ));
    }

    async post(url: string, body: any): Promise<any> {
        const headers = this.getHeaders();
        return await lastValueFrom(this.http.post(`${Environment.BASE_URL}${url}`, body, { headers })
            .pipe(
                catchError((error) => {
                    throw error;
                })
            ));
    }

    async put(url: string, body: any): Promise<any> {
        const headers = this.getHeaders();
        return await lastValueFrom(this.http.put(`${Environment.BASE_URL}${url}`, body, { headers })
            .pipe(
                catchError((error) => {
                    throw error;
                })
            ));
    }

    async delete(url: string): Promise<any> {
        const headers = this.getHeaders();
        return await lastValueFrom(this.http.delete(`${Environment.BASE_URL}${url}`, { headers })
            .pipe(
                catchError((error) => {
                    throw error;
                })
            ));
    }
}



// Uso:

/*

    1. Crear dentro de una carpeta "nombrePantalla/services/" un servicio con el comando "ng g s 'nombre del servicio'".
    En el servicio:

    2. Importaciones:

        import { Request } from 'src/app/api/request';
        import { Divisiones } from 'ruta-del-modelo/Divisiones'; // Asegúrate de importar el modelo correspondiente.

    3. Inyección de dependencia:

        constructor(private request: Request) {}

    4. Método del servicio:

        async getDivisiones(): Promise<Divisiones[]> {
            const url = '/ConsultasAgrupaciones/GetDivisiones/IdEmpresaVendedora/2003/IdUsuario/1/IdSolucion/2';

            try {
                const divisiones = await this.request.get(url);
                return divisiones;
            } catch (error) {
                console.log(error);
                throw error;
            }
        }

    Aclaración: - Nombres descriptivos!!.
    - Si el endpoint es "getX", el nombre del método tiene que ser igual.
    - No utilizar "any" en los Observables. Utilizar modelos.

        5. Utilización del Servicio:

            En el archivo .ts de la pantalla, llamamos al servicio de la siguiente manera:
            async obtenerDivisiones() {
            try {
                const divisiones = await this.AgrupacionesServices.getDivisiones();
                this.handleDivisionesChange(divisiones);
                this.defaultValuesOnInit();
            } catch (error) {
                console.log(error);
            }
            }

    En este ejemplo, dentro de la función obtenerDivisiones (que se ejecuta cuando la solicitud se resuelve correctamente),
    se llama a las funciones handleDivisionesChange() y defaultValuesOnInit()
    según sea necesario (esto es específico de cada llamado).
    Es recomendable colocar la lógica dentro de estas funciones en métodos separados
    para mantener el código más organizado y legible.

*/
