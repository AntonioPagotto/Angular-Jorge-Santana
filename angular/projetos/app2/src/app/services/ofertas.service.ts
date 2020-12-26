import { Oferta } from './../models/oferta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:3000'

@Injectable()

export class OfertasService {

    constructor(
        private http: HttpClient
    ) { }

    public getOfertas() {
        return this.http.get<Promise<Oferta[]>>(`${URL}/ofertas?destaque=true`).toPromise().then((res)=>res)
    }

}