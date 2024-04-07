import { Injectable } from '@angular/core';
import { StateService } from '../../state.service';
import { HttpClient } from '@angular/common/http';
import { IFinishes } from 'src/app/_Interfaces/IFinishes';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudfinishesService {
  URL='http://localhost:8081';


  constructor(private http: HttpClient , 
    private stateService:StateService
    ) { }


    addFinishes(finishes: IFinishes): Observable<IFinishes> {
      // Assurez-vous de ne pas envelopper NameFinishes dans un autre tableau si c'est déjà un tableau.
      return this.http.post<IFinishes>(`${this.URL}/finishes/addFinishes`, finishes);
    }

 

  
    

    updateFinishes(id: number, finishes: IFinishes): Observable<IFinishes> {
return this.http.patch<IFinishes>(`${this.URL}/machine/updateFinishes/${id}`, finishes);
}

deleteFinishes(id: number): Observable<any> {
return this.http.delete(`${this.URL}/finishes/deleteFinishes/${id}`, { responseType: 'text' });
}

getFinishesyById(id: number): Observable<IFinishes> {
return this.http.get<IFinishes>(`${this.URL}/finishes/getFinishesyById/${id}`);
}       

getAllIFinishes(): Observable<IFinishes[]> {
return this.http.get<IFinishes[]>(`${this.URL}/finishes/getAllFinishes`);
}
}
