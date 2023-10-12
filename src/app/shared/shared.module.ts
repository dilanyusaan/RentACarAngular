import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaviComponent } from './components/navi/navi.component';
import { NotFoundComponent } from './components/not-found/not-found.component';




@NgModule({
  declarations: [
    NaviComponent,
    NotFoundComponent,
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NaviComponent,
    NotFoundComponent,
    ]
})
export class SharedModule { }
