import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { ValidationResponse } from '../model/validationResponse';
import { ValidationResponseEntry } from '../model/validationResponseEntry';
import { ValidationRequest } from '../model/validationRequest';
import { ValidationRequestEntry } from '../model/validationRequestEntry';

@Injectable({ providedIn: 'root' })
export class CodeService {

    private codeServiceUrl = "https://notda-decoder.azurewebsites.net/api";

    constructor(
        private http: HttpClient
    ) {}

    validateCode(name: string, code: string): Observable<ValidationResponse> {
        var url = `${this.codeServiceUrl}/DecodeFunction`;
        const body = new ValidationRequest();
        body.codes.push(new ValidationRequestEntry(name, code));


        return this.http.post<ValidationResponse>(url, body);
    }
}