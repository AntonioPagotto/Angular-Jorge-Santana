import { Oferta } from './../models/oferta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

const URL = 'http://localhost:3000'

@Injectable()

export class OfertasService {

    constructor(
        private http: HttpClient
    ) { }

    getOfertas() {
        return this.http.get<Promise<Oferta[]>>(`${URL}/ofertas?destaque=true`).toPromise().then((res)=>res)
    }

    getOfertasPorCategoria(categoria: string){
        return this.http.get<Promise<Oferta[]>>(`${URL}/ofertas?categoria=${categoria}`).toPromise().then((res)=>res)
    }

    getOfertaById(id: number){
        return this.http.get<Promise<Oferta>>(`${URL}/ofertas?id=${id}`).toPromise().then((res) => res[0]);
    }

    // OBSERVABLE
    pesquisaOfertas(termo: string){
        return this.http.get <Observable<Oferta[]>> (`${URL}/ofertas?descricao_oferta_like=${termo}`)
           .pipe(map((resposta: any)=> resposta))
    }

}