import { inject, Injectable } from '@angular/core';
import { ResponseApi } from '../../core/models/ResponseApi';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsultationCreate } from '../../core/models/consultation/consultation-create.model';
import { ConsultationPatch } from '../../core/models/consultation/consultation-patch.model';

@Injectable({
    providedIn: 'root'
})
export class Consultation {
    private readonly http = inject(HttpClient);

    private readonly api = 'http://localhost:8080/api';

    getAll(): Observable<ResponseApi<Consultation[]>> {
        return this.http.get<ResponseApi<Consultation[]>>(`${this.api}/consultations`);
    }


    getByPatient(idPatient: number): Observable<ResponseApi<Consultation[]>> {
        return this.http.get<ResponseApi<Consultation[]>>(`${this.api}/consultation/patient/${idPatient}`);
    }


    getByDentiste(idDentiste: number): Observable<ResponseApi<Consultation[]>> {
        return this.http.get<ResponseApi<Consultation[]>>(`${this.api}/consultation/dentiste/${idDentiste}`);
    }


    save(consultation: ConsultationCreate): Observable<ResponseApi<Consultation>> {
        return this.http.post<ResponseApi<Consultation>>(`${this.api}/consultation`, consultation);
    }


    update(id: number, consultation: ConsultationCreate): Observable<ResponseApi<Consultation>> {
        return this.http.put<ResponseApi<Consultation>>(`${this.api}/consultation/${id}`, consultation);
    }


    patch(id: number, consultation: ConsultationPatch): Observable<ResponseApi<Consultation>> {
        return this.http.patch<ResponseApi<Consultation>>(`${this.api}/consultation/${id}`, consultation);
    }

    delete(id: number): Observable<ResponseApi<any>> {
        return this.http.delete<ResponseApi<any>>(`${this.api}/consultation/${id}`);
    }

}
