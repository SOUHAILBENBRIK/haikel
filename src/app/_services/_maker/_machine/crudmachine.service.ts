import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StateService } from '../../state.service';
import { IMachine } from 'src/app/_Interfaces/IMachine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudmachineService {

  URL='http://localhost:8081';

  constructor(private http: HttpClient , 
              private stateService:StateService
              ) { }


              addMachine(machine: IMachine): Observable<IMachine> {
                const payload = {
                  ...machine,
                  materials: machine.materials ? [machine.materials] : [] // Envelopper dans un tableau si non vide
                };
              
                return this.http.post<IMachine>(`${this.URL}/machine/addMachine`, payload);
              }
              

  updateMachine(id: number, machine: IMachine): Observable<IMachine> {
    return this.http.patch<IMachine>(`${this.URL}/machine/update/${id}`, machine);
  }

  deleteMachine(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/machine/deleteMachine/${id}`, { responseType: 'text' });
  }

  getMachineById(id: number): Observable<IMachine> {
    return this.http.get<IMachine>(`${this.URL}/machine/getMachineById/${id}`);
  }       
  
  getAllMachine(): Observable<IMachine[]> {
    return this.http.get<IMachine[]>(`${this.URL}/machine/getAllMachine`);
  }
  getAvailableProcesses(): Observable<string[]> {
    return this.http.get<string[]>(`${this.URL}/machine/availableProcesses`);
  }

  getMachinesByProcess(process: string): Observable<IMachine[]> {
    return this.http.get<IMachine[]>(`${this.URL}/machine/getMachinebyProcess/${process}`);
  }
  

  addMaterialToMachine(idMachine: number, newMaterial: string): Observable<IMachine> {
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
    return this.http.post<IMachine>(`${this.URL}/machine/addMaterial/${idMachine}`, newMaterial, { headers });
  }
  
  
  countAllMachines(): Observable<number> {
    return this.http.get<number>(`${this.URL}/machine/countAllMachines`);
  }

  countMachinesByTroisPrinting(): Observable<number> {
    return this.http.get<number>(`${this.URL}/machine/countMachinesByTroisPrinting`);
  }

  countMachinesByCncMachining(): Observable<number> {
    return this.http.get<number>(`${this.URL}/machine/countMachinesByCncMachining`);
  }

  countMachinesByLaserCutting(): Observable<number> {
    return this.http.get<number>(`${this.URL}/machine/countMachinesByLaserCutting`);
  }

}
