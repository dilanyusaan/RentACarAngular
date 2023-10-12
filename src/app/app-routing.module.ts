import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { BrandComponent } from './pages/brand/brand.component';
import { CarComponent } from './features/car/component/car-list/car.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars/:id",pathMatch:"full", component:CarComponent },
  {path:"brands",component:BrandComponent},
  {path:"cars", component:CarComponent},
  {path:"mete",component:BrandComponent},
  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
