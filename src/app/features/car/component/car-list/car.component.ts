import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Car } from 'src/app/shared/models/car';
import { CarService } from 'src/app/shared/services/car.service';
import { CarAbstractService } from '../../services/abstract/car-abstract.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{

  cars :Car[];
  text:string;

  constructor(private router:Router,private carService:CarAbstractService,private activatedRoute:ActivatedRoute){}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params['id']){
        
        this.getCarsByBrandId(params['id']);
      }else{
        this.getAllCars();
      }
    })

  }

  getAllCars(){
    this.carService.getCarList().subscribe(response=>{
      this.cars=response;
      console.log(response);
    })
  }

  btnClick(){
    this.router.navigate(["cars"])
  }
  getCarsByBrandId(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response;
      
    })
  }

}
