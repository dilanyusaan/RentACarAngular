import { Injectable } from '@angular/core';
import { CarAbstractService } from '../abstract/car-abstract.service';
import { Observable } from 'rxjs';
import { Car } from 'src/app/shared/models/car';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarMockService implements CarAbstractService {

  private apiUrl = "http://localhost:3000/cars"



  constructor(private httpClient:HttpClient) { }


  getCarsByBrand(brandId:number): Observable<Car[]>{

    let url = `${this.apiUrl}?model.brandId=${brandId}`;
    return this.httpClient.get<Car[]>(url);

  }

  getCarList(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiUrl)
  }
}
