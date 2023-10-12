import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarComponent } from './component/car-list/car.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CarAbstractService } from './services/abstract/car-abstract.service';
import { CarMockService } from './services/concretes/car-mock.service';



@NgModule({
  declarations: [CarComponent,FilterPipe],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports:[
    CarComponent],
    providers: [
      {
        provide: CarAbstractService,
        useClass: CarMockService,
      } // IoC Container'a müdahale etmiş oluyoruz.
    ]
  })
  export class CarModule { }
