import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
    providedIn: 'root'
})
export class CabinetPrestation {
    private readonly http = inject(HttpClient);
    private readonly url = `${environment.apiUrl}/cabinetprestation`;
    private readonly urlDentiste = `${environment.apiUrl}/cabinets`;
    private readonly urlPatients = `${environment.apiUrl}/patients`;


    getByCabinet(cabinetId: number) {
        return this.http.get(`${this.url}/cabinet/${cabinetId}`);
    }

    getDentisteCabinet(dentisteId: number) {
        return this.http.get(`${this.urlDentiste}/${dentisteId}/dentistes`);
    }

    getPatientsCabinet() {
        return this.http.get(`${this.urlPatients}`);
    }


}
