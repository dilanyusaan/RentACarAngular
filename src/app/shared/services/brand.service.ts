import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  
  private apiUrl= "http://localhost:3000/"

  constructor(private httpClient: HttpClient ) { }

  getAllBrands():Observable<Brand[]>{

    let newPath = this.apiUrl + 'brands';
    return this.httpClient.get<Brand[]>(newPath)
  }
}
