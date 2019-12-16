import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCarsComponent } from  '../app/list-cars/list-cars.component';
import { RegisterCarComponent } from  '../app/register-car/register-car.component';

const routes: Routes = [
  { path: 'list-cars', component: ListCarsComponent, },
  { path: 'register-car', component: RegisterCarComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
