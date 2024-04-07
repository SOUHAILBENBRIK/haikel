import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StateService } from '../state.service';
import { Observable } from 'rxjs';
import { IContactUs } from 'src/app/_Interfaces/IContactUs';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  URL='http://localhost:8081';

  constructor(private http: HttpClient , private stateService:StateService) { }


  addContactUs(contactUsData: IContactUs): Observable<IContactUs> {
    return this.http.post<IContactUs>(`${this.URL}/ContactUs/addContactUs`, contactUsData);
  }

}
