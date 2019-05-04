import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CodeResult } from '../entities/codeResult';
import { Injectable } from '@angular/core';
import { ValidationResponse } from '../entities/validationResponse';
import {map} from 'rxjs/operators';
import { PlayerData } from '../entities/playerData';

@Injectable({ providedIn: 'root' })
export class CodeService {

    private codeServiceUrl = "https://notda-decoder.azurewebsites.net/api";

    constructor(
        private http: HttpClient
    ) {}

    validateCode(name: string, code: string): Observable<ValidationResponse> {
        var url = `${this.codeServiceUrl}/DecodeFunction?name=${name}&code=${code}`;
        return this.http.get<ValidationResponse>(url).pipe(
            map(response => new ValidationResponse(response))
        )
    }
}